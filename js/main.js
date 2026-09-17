(function () {
  'use strict';

  // Mobile menu toggle
  var menuBtn = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Grouped scroll-reveal: each section fades in once, as one moment, not element-by-element chatter
  var groups = document.querySelectorAll('.reveal-group');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !prefersReducedMotion && groups.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    groups.forEach(function (group) {
      observer.observe(group);
    });
  } else {
    groups.forEach(function (group) {
      group.classList.add('is-visible');
    });
  }

  // Footer year guard: keep the client's required copyright year unless the calendar has moved on
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    var currentYear = new Date().getFullYear();
    var printedYear = parseInt(yearEl.textContent, 10);
    if (currentYear > printedYear) {
      yearEl.textContent = String(currentYear);
    }
  }
})();
