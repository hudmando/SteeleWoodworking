(function () {
  'use strict';

  // Spatial coordinates — each page's position relative to home
  var PAGES = {
    'index.html':    { x:  0, y: 0 },
    'about.html':    { x: -1, y: 0 },
    'projects.html': { x:  1, y: 0 },
    'create.html':   { x:  0, y: 1 }
  };

  function pageKey(s) {
    var f = s.split('/').pop().split('?')[0].split('#')[0];
    return f === '' ? 'index.html' : f;
  }

  // Clamp to ±1 so each axis is a unit component regardless of page distance
  function sign(n) { return n > 0 ? 1 : n < 0 ? -1 : 0; }

  // Write (or overwrite) the vt-exit / vt-enter keyframes for a given direction.
  // dx/dy are each ±1 or 0. The old page exits opposite to travel; the new
  // page starts in the travel direction and animates to its resting position.
  function writeKeyframes(dx, dy) {
    var ex = -dx * 100, ey = -dy * 100; // exit endpoint  (% of viewport)
    var nx =  dx * 100, ny =  dy * 100; // enter start    (% of viewport)
    var el = document.getElementById('vt-kf');
    if (!el) {
      el = document.createElement('style');
      el.id = 'vt-kf';
      document.head.appendChild(el);
    }
    el.textContent =
      '@keyframes vt-exit{to{transform:translate(' + ex + '%,' + ey + '%)}}' +
      '@keyframes vt-enter{from{transform:translate(' + nx + '%,' + ny + '%)}}' +
      '@keyframes vt-sliver-enter{from{transform:translate(' + ex + '%,' + ey + '%)}}';
  }

  var html         = document.documentElement;
  var currentKey   = pageKey(location.pathname);
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Intercept internal link clicks and drive the exit transition
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#') return;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;

    var destKey = pageKey(href);
    if (!PAGES[destKey] || destKey === currentKey) return;

    e.preventDefault();

    if (!document.startViewTransition || reducedMotion.matches) {
      window.location.href = href;
      return;
    }

    var src = PAGES[currentKey];
    var dst = PAGES[destKey];
    var dx  = sign(dst.x - src.x);
    var dy  = sign(dst.y - src.y);

    // Set up exit animation on the departing page
    writeKeyframes(dx, dy);
    html.classList.add('vt-active');

    // Pass direction to the arriving page's inline head script
    sessionStorage.setItem('vt-dx', dx);
    sessionStorage.setItem('vt-dy', dy);

    document.startViewTransition(function () {
      window.location.href = href;
    });
  });

}());
