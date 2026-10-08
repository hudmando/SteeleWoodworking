/* =========================================================================
   Projects page — renders the tile grid and the slide-in detail panel
   from STEELE_PROJECTS (js/projects-data.js, the single source of truth).
   ========================================================================= */
(function (PROJECTS) {
  'use strict';

  var OPEN_CLASS = 'is-open';

  var grid        = document.getElementById('projectsGrid');
  var panel       = document.getElementById('projectPanel');
  var backdrop    = document.getElementById('panelBackdrop');
  var panelTitle  = document.getElementById('panelTitle');
  var panelPhotos = document.getElementById('panelPhotos');
  var panelDesc   = document.getElementById('panelDesc');
  var btnClose    = document.getElementById('panelClose');
  var btnPrev     = document.getElementById('panelPrev');
  var btnNext     = document.getElementById('panelNext');

  var currentPhoto = 0;
  var totalPhotos  = 0;
  /** @type {HTMLElement | null} */
  var lastFocused  = null;

  /** @param {number} index @returns {HTMLButtonElement} */
  function buildTile(index) {
    var p = PROJECTS[index];
    var tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'project-tile';
    tile.textContent = p.title;
    tile.style.backgroundImage = 'url("' + p.photos[0] + '")';
    tile.addEventListener('click', function () {
      lastFocused = tile;
      openPanel(index);
    });
    return tile;
  }

  /** @param {HTMLElement} el @param {boolean} open */
  function setOpen(el, open) { el.classList.toggle(OPEN_CLASS, open); }

  /** Closed panel stays out of the tab order and the accessibility tree. */
  function setPanelOpen(open) {
    setOpen(panel, open);
    setOpen(backdrop, open);
    panel.setAttribute('aria-hidden', String(!open));
    panel.inert = !open;
  }

  function updateNav() {
    btnPrev.style.visibility = currentPhoto === 0 ? 'hidden' : 'visible';
    btnNext.style.visibility = currentPhoto >= totalPhotos - 1 ? 'hidden' : 'visible';
  }

  /** @param {-1 | 1} dir */
  function navigate(dir) {
    currentPhoto = Math.max(0, Math.min(totalPhotos - 1, currentPhoto + dir));
    panelPhotos.scrollTo({ left: currentPhoto * panelPhotos.offsetWidth, behavior: 'smooth' });
    updateNav();
  }

  /**
   * @param {number} index
   * @returns {{status: 'ok'} | {status: 'invalid'}}
   */
  function openPanel(index) {
    var p = PROJECTS[index];
    if (!p) return { status: 'invalid' };

    panelTitle.textContent = p.title;
    panelDesc.textContent  = p.desc;
    panelPhotos.replaceChildren();
    p.photos.forEach(function (src, i) {
      var div = document.createElement('div');
      div.className = 'project-panel__photo';
      var img = document.createElement('img');
      img.src      = src;
      img.alt      = p.title;
      img.loading  = 'lazy';
      img.decoding = 'async';
      if (p.positions && p.positions[i]) img.style.objectPosition = p.positions[i];
      div.appendChild(img);
      panelPhotos.appendChild(div);
    });

    currentPhoto = 0;
    totalPhotos  = p.photos.length;
    panelPhotos.scrollLeft = 0;
    panel.scrollTop = 0;
    updateNav();
    setPanelOpen(true);
    btnClose.focus();
    return { status: 'ok' };
  }

  function closePanel() {
    setPanelOpen(false);
    if (lastFocused) lastFocused.focus();
  }

  PROJECTS.forEach(function (_, i) { grid.appendChild(buildTile(i)); });
  setPanelOpen(false);

  panelPhotos.addEventListener('scroll', function () {
    currentPhoto = Math.round(panelPhotos.scrollLeft / panelPhotos.offsetWidth);
    updateNav();
  });

  btnClose.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  btnPrev.addEventListener('click', function () { navigate(-1); });
  btnNext.addEventListener('click', function () { navigate(1); });

  document.addEventListener('keydown', function (e) {
    if (!panel.classList.contains(OPEN_CLASS)) return;
    if (e.key === 'Escape')     { closePanel(); }
    if (e.key === 'ArrowLeft')  { navigate(-1); }
    if (e.key === 'ArrowRight') { navigate(1); }
  });

}(STEELE_PROJECTS));
