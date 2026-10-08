/* =========================================================================
   Page transitions — cross-document View Transitions
   ---------------------------------------------------------------------------
   Loaded synchronously in <head> so the `pagereveal` listener is registered
   before the arriving page's first render (the only moment its transition
   can be styled).

   The travel direction is derived on arrival from the page we came from
   (Navigation API, falling back to document.referrer), so ordinary links,
   modifier-clicks, and back/forward all behave natively and nothing is
   stashed in storage. The animations themselves live in css/transitions.css;
   only the direction-dependent keyframes are written here.
   ========================================================================= */
(function () {
  'use strict';

  /**
   * Each page's position relative to Home, in unit steps.
   * Must agree with each page's <body data-camera>, which places its sliver
   * (css/style.css, "SLIVER"): x=+1 is camera "right", y=+1 is camera "down".
   * @type {Readonly<Record<string, Readonly<{x: number, y: number}>>>}
   */
  var PAGES = Object.freeze({
    'index.html':    Object.freeze({ x:  0, y: 0 }),
    'about.html':    Object.freeze({ x: -1, y: 0 }),
    'projects.html': Object.freeze({ x:  1, y: 0 }),
    'create.html':   Object.freeze({ x:  0, y: 1 })
  });

  var HOME = 'index.html';
  var KEYFRAMES_ID = 'vt-kf';
  var ACTIVE_CLASS = 'vt-active';

  /**
   * Resolve a URL to its PAGES key, or null for anything off-site or unknown.
   * @param {string} url
   * @returns {string | null}
   */
  function pageKey(url) {
    var parsed;
    try { parsed = new URL(url, location.href); } catch (e) { return null; }
    if (parsed.origin !== location.origin) return null;
    var file = parsed.pathname.split('/').pop() || HOME;
    return Object.prototype.hasOwnProperty.call(PAGES, file) ? file : null;
  }

  /** @param {number} n @returns {-1 | 0 | 1} */
  function sign(n) { return n > 0 ? 1 : n < 0 ? -1 : 0; }

  /**
   * Unit direction of travel between two pages. Each axis is clamped to ±1
   * so a diagonal route slides at a true 45° regardless of page distance.
   * @param {string} fromUrl
   * @param {string} toUrl
   * @returns {{status: 'ok', dx: -1|0|1, dy: -1|0|1} | {status: 'none'}}
   */
  function directionBetween(fromUrl, toUrl) {
    var from = pageKey(fromUrl);
    var to = pageKey(toUrl);
    if (!from || !to || from === to) return { status: 'none' };
    var dx = sign(PAGES[to].x - PAGES[from].x);
    var dy = sign(PAGES[to].y - PAGES[from].y);
    return { status: 'ok', dx: dx, dy: dy };
  }

  /**
   * Write the direction-dependent keyframes used by css/transitions.css.
   * The old page exits opposite to travel; the new page starts on the
   * travel side and slides to rest; the sliver re-enters from the side the
   * old page left toward.
   * @param {-1|0|1} dx
   * @param {-1|0|1} dy
   */
  function writeKeyframes(dx, dy) {
    var ex = -dx * 100, ey = -dy * 100; // exit endpoint, % of viewport
    var el = document.getElementById(KEYFRAMES_ID);
    if (!el) {
      el = document.createElement('style');
      el.id = KEYFRAMES_ID;
      document.head.appendChild(el);
    }
    el.textContent =
      '@keyframes vt-exit{to{transform:translate(' + ex + '%,' + ey + '%)}}' +
      '@keyframes vt-enter{from{transform:translate(' + (-ex) + '%,' + (-ey) + '%)}}' +
      '@keyframes vt-sliver-enter{from{transform:translate(' + ex + '%,' + ey + '%)}}';
  }

  /** @returns {string} URL of the page we arrived from, or '' if unknown */
  function arrivedFrom() {
    var nav = window.navigation;
    var from = nav && nav.activation && nav.activation.from;
    return (from && from.url) || document.referrer || '';
  }

  window.addEventListener('pagereveal', function (e) {
    var vt = e.viewTransition;
    if (!vt) return; // no transition (first load, reduced motion, unsupported)

    var dir = directionBetween(arrivedFrom(), location.href);
    if (dir.status !== 'ok') { vt.skipTransition(); return; }

    var root = document.documentElement;
    writeKeyframes(dir.dx, dir.dy);
    root.classList.add(ACTIVE_CLASS);
    vt.finished.finally(function () { root.classList.remove(ACTIVE_CLASS); });
  });
}());
