(function () {
  'use strict';

  var PROJECTS = [
    {
      title: 'Maple Couch Table',
      desc: 'One of the first projects out of the shop: a long, narrow maple table built to sit behind a couch. The top was glued up so a ribbon of dark heartwood runs right down the middle between pale sapwood, and that stripe is still the favorite detail. Square legs, a simple apron and a low shelf keep the rest quiet.',
      photos: [
        'images/maple%20couch%20table/IMG_0535%20(1).jpg',
        'images/maple%20couch%20table/IMG_0525%20(2).jpg',
        'images/maple%20couch%20table/IMG_0534%20(3).jpg',
        'images/maple%20couch%20table/IMG_0235%20(4).jpg',
        'images/maple%20couch%20table/IMG_0134%20(5).jpg'
      ],
      positions: [null, 'center 30%', null, null, null]
    },
    {
      title: 'Live Edge Walnut Coffee Table',
      desc: 'The very first table, built in middle school in collaboration with Urban Lumber in Springfield, Oregon. It is a single live-edge slab of walnut, with the growth rings stretching across the top and the natural edge and pale sapwood left intact. It sits on a square steel base so the wood stays the focus.',
      photos: [
        'images/live%20edge%20walnut%20coffee%20table/IMG_0782%20(1).jpg',
        'images/live%20edge%20walnut%20coffee%20table/IMG_0783%20(2).jpg'
      ]
    },
    {
      title: 'Checkered Cutting Boards',
      desc: 'A pair of end-grain cutting boards in a checkerboard of maple, walnut and cherry. End grain is gentle on knife edges and holds up to daily use, and the contrasting borders and end caps frame the pattern.',
      photos: [
        'images/checkered%20cutting%20boards/IMG_0852%20(1).jpg',
        'images/checkered%20cutting%20boards/IMG_1184%20(2).jpg',
        'images/checkered%20cutting%20boards/IMG_1154%20(3).jpg',
        'images/checkered%20cutting%20boards/IMG_1155%20(4).jpg'
      ],
      positions: [null, 'center 35%', null, null]
    },
    {
      title: 'Black Walnut End Table',
      desc: 'Two end tables cut from the same original slab of black walnut, so their grain and color carry from one to the other. Each is built as a thick, solid block on slim steel legs. Both now live in the downtown Washburne Café.',
      photos: [
        'images/balck%20walnut%20end%20table/IMG_2553%20(1).jpg',
        'images/balck%20walnut%20end%20table/IMG_2432%20(2).jpg',
        'images/balck%20walnut%20end%20table/IMG_2336%20(3).jpg'
      ]
    },
    {
      title: 'Axe Art',
      desc: 'Commissioned by the Thurston Life Foundation for the Washburne Café, where it hangs today. A full-size axe rests in leather straps, and columns of small black walnut and maple cubes hang beneath it. Hidden in the piece is a secret reference to Acts 2:38.',
      photos: [
        'images/axe%20art/IMG_7072%20(1).jpg',
        'images/axe%20art/IMG_4376%20(2).jpg',
        'images/axe%20art/IMG_3333%20(3).jpg',
        'images/axe%20art/IMG_2685%20(4).jpg'
      ],
      positions: ['center 15%', null, null, null]
    },
    {
      title: 'Night Stands',
      desc: 'A pair of maple night stands with tapered legs. A 45-degree angle profile repeats through the whole piece as part of the design. The tops were chosen for the ribbons of heartwood running through them, the favorite detail on both stands. A low shelf gives room for books or a blanket.',
      photos: [
        'images/night%20stands/IMG_3818%20(1).jpg',
        'images/night%20stands/IMG_3800%20(2).jpg',
        'images/night%20stands/IMG_3787%20(3).jpg',
        'images/night%20stands/IMG_3785%20(4).jpg',
        'images/night%20stands/IMG_2965%20(5).jpg',
        'images/night%20stands/IMG_2963%20(6).jpg',
        'images/night%20stands/IMG_2864.jpg',
        'images/night%20stands/IMG_2967.jpg',
        'images/night%20stands/IMG_3797.jpg'
      ]
    },
    {
      title: 'Washburn Tables',
      desc: 'Six maple tables, all the same size but each one unique, made for the Thurston Life Foundation at the Washburne Café. The wood was salvaged from maple trees burned in the Holiday Farm Fire in Oregon, and the tops keep the character marks that history left in the grain.',
      photos: [
        'images/washburn%20tables/IMG_4276%20(1).jpg',
        'images/washburn%20tables/IMG_4278%20(2).jpg',
        'images/washburn%20tables/IMG_4170%20(3).jpg',
        'images/washburn%20tables/IMG_4128%20(4).jpg',
        'images/washburn%20tables/IMG_4096%20(5).jpg',
        'images/washburn%20tables/IMG_3838%20(6).jpg'
      ]
    },
    {
      title: 'Bread Boxes',
      desc: 'A pair of bread boxes made from black walnut and maple. The cases are solid black walnut chosen for its figure, and the roll-top tambour doors are lighter maple slats that slide up and back into the case.',
      photos: [
        'images/bread%20boxes/IMG_4317%20(1).jpg',
        'images/bread%20boxes/IMG_2222%20(2).jpg',
        'images/bread%20boxes/IMG_4294%20(3).jpg',
        'images/bread%20boxes/IMG_4293.jpg'
      ]
    },
    {
      title: 'Tenon and Mortised Maple End Table',
      desc: 'A solid maple end table built around through mortise-and-tenon joinery. Every rail passes clean through its leg and is locked with a pair of wedges, left exposed as the defining detail of the piece. The joints were laid out and fit by hand with a Japanese pull saw and chisels, and the top is a glued-up maple panel that keeps its natural checks and character.',
      photos: [
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(1).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(2).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(3).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(4).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(5).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(6).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(7).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(8).jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple%20end%20table%20(9).jpg'
      ],
      positions: ['center 55%', 'center 45%', 'center 55%', 'center 45%', null, null, null, null, null]
    },
    {
      title: 'Walnut Bar Stools',
      desc: 'A set of walnut bar stools, currently in progress, modeled after the stools of KOMA, the Japanese furniture maker. Each frame is built entirely with mortise-and-tenon joinery. The legs are coved along their inside faces, and the aprons sweep down into shaped shoulders where they meet the legs. The parts were milled and fit with Japanese chisels and hand planes, then glued up one stool at a time.',
      photos: [
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(1).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(2).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(3).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(4).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(5).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(6).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(7).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(8).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(9).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(10).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(11).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(12).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(13).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(14).jpg',
        'images/walnut%20bar%20stools/walnut%20bar%20stools%20(15).jpg'
      ],
      positions: ['center 30%', 'center 55%', null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
  ];

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
  var lastFocused  = null;

  function updateNav() {
    btnPrev.style.visibility = currentPhoto === 0 ? 'hidden' : 'visible';
    btnNext.style.visibility = currentPhoto >= totalPhotos - 1 ? 'hidden' : 'visible';
  }

  function navigate(dir) {
    currentPhoto = Math.max(0, Math.min(totalPhotos - 1, currentPhoto + dir));
    panelPhotos.scrollTo({ left: currentPhoto * panelPhotos.offsetWidth, behavior: 'smooth' });
    updateNav();
  }

  function openPanel(index) {
    var p = PROJECTS[index];
    panelTitle.textContent = p.title;
    panelDesc.textContent  = p.desc;
    panelPhotos.innerHTML  = '';
    p.photos.forEach(function (src, i) {
      var div = document.createElement('div');
      div.className = 'project-panel__photo';
      var img = document.createElement('img');
      img.src     = src;
      img.alt     = p.title;
      img.loading = 'lazy';
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
    panel.classList.add('is-open');
    backdrop.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    btnClose.focus();
  }

  function closePanel() {
    panel.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    if (lastFocused) lastFocused.focus();
  }

  panelPhotos.addEventListener('scroll', function () {
    currentPhoto = Math.round(panelPhotos.scrollLeft / panelPhotos.offsetWidth);
    updateNav();
  });

  document.querySelectorAll('[data-project]').forEach(function (tile) {
    tile.addEventListener('click', function () {
      lastFocused = tile;
      openPanel(+tile.dataset.project);
    });
  });

  btnClose.addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  btnPrev.addEventListener('click', function () { navigate(-1); });
  btnNext.addEventListener('click', function () { navigate(1); });

  document.addEventListener('keydown', function (e) {
    if (!panel.classList.contains('is-open')) return;
    if (e.key === 'Escape')      { closePanel(); }
    if (e.key === 'ArrowLeft')   { navigate(-1); }
    if (e.key === 'ArrowRight')  { navigate(1); }
  });

}());
