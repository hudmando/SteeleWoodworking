// Site regression check — run with `node tests/check-site.mjs` from the repo root.
// Pins the contracts the static site relies on, with no dependencies:
//   1. every project photo exists and positions point at real photos
//   2. each page's <body data-camera> agrees with PAGES in js/transitions.js
//   3. every local src/href in the HTML resolves to a file
import { readFileSync, existsSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const PAGE_FILES = Object.freeze(['index.html', 'about.html', 'projects.html', 'create.html']);

/** Camera name implied by a page's position relative to Home (see css/style.css header). */
const cameraFor = ({ x, y }) =>
  x === 0 && y === 0 ? 'center' : x < 0 ? 'left' : x > 0 ? 'right' : y > 0 ? 'down' : 'up';

/** @type {string[]} */
const failures = [];
const fail = (msg) => failures.push(msg);

// 1. Project catalogue ------------------------------------------------------
const dataSrc = readFileSync('js/projects-data.js', 'utf8');
const projects = runInNewContext(`${dataSrc}; STEELE_PROJECTS`);
const titles = new Set();
projects.forEach((p, i) => {
  if (!p.title || !p.desc) fail(`project ${i}: missing title or desc`);
  if (titles.has(p.title)) fail(`project ${i}: duplicate title "${p.title}"`);
  titles.add(p.title);
  if (!p.photos.length) fail(`${p.title}: no photos`);
  p.photos.forEach((src) => {
    if (!existsSync(decodeURI(src))) fail(`${p.title}: missing photo ${decodeURI(src)}`);
  });
  Object.keys(p.positions ?? {}).forEach((k) => {
    if (!(Number(k) >= 0 && Number(k) < p.photos.length)) fail(`${p.title}: position key ${k} has no photo`);
  });
});

// 2. Page positions vs data-camera ------------------------------------------
const transSrc = readFileSync('js/transitions.js', 'utf8');
const pagesLiteral = transSrc.match(/var PAGES = Object\.freeze\((\{[\s\S]*?\})\);/);
if (!pagesLiteral) {
  fail('js/transitions.js: could not find the PAGES map');
} else {
  const pages = runInNewContext(`(${pagesLiteral[1].replace(/Object\.freeze\((\{[^}]*\})\)/g, '$1')})`);
  PAGE_FILES.forEach((file) => {
    const camera = readFileSync(file, 'utf8').match(/<body data-camera="([a-z]+)">/)?.[1];
    if (!pages[file]) fail(`${file}: not in PAGES`);
    else if (camera !== cameraFor(pages[file]))
      fail(`${file}: data-camera="${camera}" but PAGES implies "${cameraFor(pages[file])}"`);
  });
}

// 3. Local references --------------------------------------------------------
PAGE_FILES.forEach((file) => {
  const html = readFileSync(file, 'utf8');
  for (const [, ref] of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
    if (!existsSync(decodeURI(ref))) fail(`${file}: broken reference ${ref}`);
  }
});

if (failures.length) {
  console.error(`✗ ${failures.length} problem(s):\n  ` + failures.join('\n  '));
  process.exit(1);
}
console.log(`✓ ${projects.length} projects, ${PAGE_FILES.length} pages — all checks pass`);
