# Steele Woodworking — site conventions

Static site (plain HTML/CSS/JS, no build step), served from `main`.

## Sources of truth
| Fact | Lives in |
|---|---|
| Projects (titles, descriptions, photos, crops, grid order) | `js/projects-data.js` — tiles and panels are rendered from it |
| Page positions for transitions | `PAGES` in `js/transitions.js`; must match each page's `<body data-camera>` |
| Colours and shared dimensions | `:root` tokens at the top of `css/style.css` (mobile overrides at the bottom) |
| Transition timings | `:root` tokens at the top of `css/transitions.css` |
| Box grid artwork | `images/grid.svg` (Home hero and every sliver) |

The footer is duplicated in each HTML page (no build step to include it); edit all four together.

## Adding a project
1. Folder: `images/<project name, lowercase>/`; files `<project name> (n).jpg`, where n is the display position.
2. Photo order: finished piece first, then the build in reverse (newest to oldest). Photo (1) is the tile cover.
3. Add an entry to `js/projects-data.js`. In-progress work stays last in the grid.
4. Descriptions: third person, about the work. Use the maker's own facts (species, who it's for, where it lives); don't invent details.
5. Run `node tests/check-site.mjs` before pushing.

## Checks
`node tests/check-site.mjs` — verifies every photo exists, crop keys point at real photos, page cameras agree with `PAGES`, and every local `src`/`href` resolves.
