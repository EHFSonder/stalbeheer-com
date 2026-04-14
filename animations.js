/* ============================================================
   STALBEHEER — Scroll-triggered animations (Apple-stijl)
   ============================================================ */

(function () {
  'use strict';

  /* ── 0. Intro: cinematische binnenkomer ─────────────────────── */
  const intro = document.getElementById('intro');
  if (intro) {
    // Scroll blokkeren tijdens intro
    document.body.style.overflow = 'hidden';

    const dismiss = () => {
      intro.classList.add('intro-exit');
      document.body.style.overflow = '';
      setTimeout(() => intro.remove(), 1050);
    };

    // Na 2.4s automatisch weggaan
    const timer = setTimeout(dismiss, 2400);

    // Klikken versnelt de intro
    intro.addEventListener('click', () => { clearTimeout(timer); dismiss(); });
  }

  /* ── 1. Nav: schaduw bij scrollen ─────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 2. Hero-elementen: inkomend bij laden ─────────────────── */
  // Elk element met data-hero krijgt een entrance-animatie op volgorde
  document.querySelectorAll('[data-hero]').forEach((el, i) => {
    el.style.animationDelay = (i * 0.13) + 's';
    el.classList.add('hero-enter');
  });

  /* ── 3. Scroll-triggered fade-up via IntersectionObserver ──── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -56px 0px'
  });

  // Elementen met data-anim worden geobserveerd
  document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));

  // Elementen met data-stagger: kinderen krijgen oplopende vertraging
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.setAttribute('data-anim', '');
      child.style.setProperty('--stagger-i', i);
      io.observe(child);
    });
  });

  /* ── 4. Parallax: hero beweegt langzaam mee bij scrollen ───── */
  const hero = document.querySelector('.hero');
  if (hero && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.backgroundPositionY = (y * 0.25) + 'px';
    }, { passive: true });
  }

  /* ── 5. Smooth counter voor hero-stats ─────────────────────── */
  function animateCounter(el, target, suffix, prefix, duration) {
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Apple-achtige ease: cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = isFloat ? (target * ease).toFixed(1) : Math.round(target * ease);
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Observer speciaal voor de stats-strip
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        animateCounter(el, target, suffix, prefix, 1200);
      });
      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) statsObserver.observe(statsEl);

})();
