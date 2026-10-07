(function () {
  'use strict';

  var PROJECTS = [
    {
      title: 'Maple Couch Table',
      desc: 'Add a description for the Maple Couch Table here.',
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
      desc: 'Add a description for the Live Edge Walnut Coffee Table here.',
      photos: [
        'images/live%20edge%20walnut%20coffee%20table/IMG_0782%20(1).jpg',
        'images/live%20edge%20walnut%20coffee%20table/IMG_0783%20(2).jpg'
      ]
    },
    {
      title: 'Checkered Cutting Boards',
      desc: 'Add a description for the Checkered Cutting Boards here.',
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
      desc: 'Add a description for the Black Walnut End Table here.',
      photos: [
        'images/balck%20walnut%20end%20table/IMG_2553%20(1).jpg',
        'images/balck%20walnut%20end%20table/IMG_2432%20(2).jpg',
        'images/balck%20walnut%20end%20table/IMG_2336%20(3).jpg'
      ]
    },
    {
      title: 'Axe Art',
      desc: 'Add a description for the Axe Art here.',
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
      desc: 'Add a description for the Night Stands here.',
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
      desc: 'Add a description for the Washburn Tables here.',
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
      desc: 'Add a description for the Bread Boxes here.',
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
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-1.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-2.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-3.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-4.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-5.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-6.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-7.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-8.jpg',
        'images/tenon%20and%20mortised%20maple%20end%20table/maple-end-table-9.jpg'
      ],
      positions: ['center 55%', 'center 45%', 'center 55%', 'center 45%', null, null, null, null, null]
    },
    {
      title: 'Walnut Bar Stools',
      desc: 'A set of walnut bar stools, currently in progress, modeled after the stools of KOMA, the Japanese furniture maker. Each frame is built entirely with mortise-and-tenon joinery. The legs are coved along their inside faces, and the aprons sweep down into shaped shoulders where they meet the legs. The parts were milled and fit with Japanese chisels and hand planes, then glued up one stool at a time.',
      photos: [
        'images/walnut%20bar%20stools/walnut-bar-stools-1.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-2.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-3.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-4.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-5.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-6.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-7.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-8.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-9.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-10.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-11.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-12.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-13.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-14.jpg',
        'images/walnut%20bar%20stools/walnut-bar-stools-15.jpg'
      ],
      positions: ['center 55%', null, null, null, null, null, null, null, null, null, null, null, null, null, 'center 30%']
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
