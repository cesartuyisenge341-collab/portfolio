/* ================================================
   CESAR TUYISENGE PORTFOLIO — Shared Scripts
   ================================================ */

/* ---- Page loader ---- */
(function () {
  const bar = document.getElementById('pageLoader');
  if (!bar) return;
  bar.style.width = '70%';
  window.addEventListener('load', function () {
    bar.style.width = '100%';
    setTimeout(function () { bar.style.opacity = '0'; }, 400);
    setTimeout(function () { bar.remove(); }, 800);
  });
})();

/* ---- Hamburger / mobile nav ---- */
(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ---- Scroll-to-top button ---- */
(function () {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 380);
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- Fade-up on scroll ---- */
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  // Stagger delay for sibling elements
  els.forEach(function (el, i) {
    if (!el.style.transitionDelay) {
      const siblings = Array.from(el.parentElement.querySelectorAll('.fade-up'));
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = (idx * 0.07) + 's';
    }
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(function (el) { observer.observe(el); });
})();
