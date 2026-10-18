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

/* ---- Skill bar animation (capabilities page) ---- */
(function () {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(function (bar) { observer.observe(bar); });
})();

/* ---- Contact form ---- */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    const name    = form.querySelector('[name="name"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const submit  = form.querySelector('[type="submit"]');

    feedback.classList.remove('success', 'error');
    feedback.style.display = 'none';

    if (!name || !email || !message) {
      feedback.textContent = '⚠ Please fill in all required fields.';
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = '⚠ Please enter a valid email address.';
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    submit.disabled = true;
    submit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    // Simulate async send (replace with real fetch/EmailJS later)
    setTimeout(function () {
      form.reset();
      submit.disabled = false;
      submit.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send message';
      feedback.textContent = '✓ Message sent! I\'ll get back to you soon.';
      feedback.classList.add('success');
      feedback.style.display = 'block';
      setTimeout(function () { feedback.style.display = 'none'; }, 5000);
    }, 1400);
  });
})();
