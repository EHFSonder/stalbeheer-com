// Shared nav/footer + svg sprite injected into each page
(function(){
  const SVG_SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8h9M8.5 4l4 4-4 4"/></symbol>
  <symbol id="i-check" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8.5l3.5 3.5L13 5"/></symbol>
  <symbol id="i-alert" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1.5L14.5 13h-13L8 1.5z"/><path d="M8 6v3.5M8 11.5v.5"/></symbol>
  <symbol id="i-pig" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0-4 3.5-7 8-7s8 3 8 7v2c0 2.5-1.5 4.5-4 5v2h-2v-2h-4v2H8v-2c-2.5-.5-4-2.5-4-5v-2z"/><circle cx="9" cy="11" r=".7" fill="currentColor"/><circle cx="15" cy="11" r=".7" fill="currentColor"/><path d="M11 14h2M2 10l2 1M22 10l-2 1"/></symbol>
  <symbol id="i-silo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h12v14H6zM6 6l2-3h8l2 3M9 6v14M15 6v14M6 11h12M6 15h12"/></symbol>
  <symbol id="i-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></symbol>
  <symbol id="i-truck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h5l2 3v4h-7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></symbol>
  <symbol id="i-syringe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3l6 6M18 6l-9 9M9 15l-4 4-2-2 4-4M9 15l2 2"/><path d="M13 11l-3-3M16 8l-3-3"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16"/><path d="M8 15v-4M12 15v-7M16 15v-2"/></symbol>
  <symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7v10h-6v-7h-6v7H3V11z"/></symbol>
  <symbol id="i-wifi" viewBox="0 0 16 16" fill="currentColor"><path d="M8 12a1 1 0 110 2 1 1 0 010-2zm0-3.2c1.2 0 2.3.5 3.2 1.3l-1 1c-.6-.6-1.4-.9-2.2-.9s-1.6.3-2.2.9l-1-1c.9-.8 2-1.3 3.2-1.3zm0-3.2c2 0 3.9.8 5.3 2.2l-1 1C11.1 7.6 9.6 7 8 7s-3.1.6-4.3 1.8l-1-1C4.1 6.4 6 5.6 8 5.6zm0-3.1c2.9 0 5.6 1.1 7.5 3l-1 1C12.9 3.7 10.5 2.8 8 2.8S3.1 3.7 1.5 5.3l-1-1C2.4 2.6 5.1 2.5 8 2.5z"/></symbol>
  <symbol id="i-battery" viewBox="0 0 20 12" fill="none" stroke="currentColor" stroke-width="1"><rect x="1" y="1" width="16" height="10" rx="2"/><path d="M18 4v4" stroke-width="1.5"/><rect x="3" y="3" width="11" height="6" rx="1" fill="currentColor" stroke="none"/></symbol>
</svg>`;

  const PAGES = [
    {href:'index.html', label:'Home'},
    {href:'functies.html', label:'Functies'},
    {href:'prijs.html', label:'Prijs'},
    {href:'talen.html', label:'Talen'},
    {href:'over.html', label:'Over ons'},
    {href:'contact.html', label:'Contact'},
  ];

  const current = (location.pathname.split('/').pop() || 'index.html');

  const NAV = `<header class="nav">
    <div class="nav-inner">
      <a href="index.html" class="logo">
        <div class="logo-mark">S</div>
        <div class="logo-text">stal<em>beheer</em></div>
      </a>
      <ul class="nav-links">
        ${PAGES.map(p => `<li><a href="${p.href}" ${p.href===current?'class="active"':''}>${p.label}</a></li>`).join('')}
      </ul>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-ghost btn-sm">Inloggen</a>
        <a href="contact.html" class="btn btn-primary btn-sm">Demo aanvragen <svg><use href="#i-arrow"/></svg></a>
      </div>
    </div>
  </header>`;

  const FOOTER = `<footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div>
          <div class="logo">
            <div class="logo-mark">S</div>
            <div class="logo-text">stal<em>beheer</em></div>
          </div>
          <p class="footer-desc">De app voor de moderne varkenshouder. Van inkoop tot aflevering — alles in één overzicht.</p>
        </div>
        <div class="footer-col"><div class="footer-col-title">Product</div><ul>
          <li><a href="functies.html">Functies</a></li>
          <li><a href="prijs.html">Prijs</a></li>
          <li><a href="talen.html">Talen</a></li>
        </ul></div>
        <div class="footer-col"><div class="footer-col-title">Bedrijf</div><ul>
          <li><a href="over.html">Over ons</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul></div>
        <div class="footer-col"><div class="footer-col-title">Juridisch</div><ul>
          <li><a href="#">Privacy</a></li><li><a href="#">Voorwaarden</a></li>
        </ul></div>
      </div>
      <div class="footer-bot"><span>© 2026 Stalbeheer</span><span>Gemaakt in Twente, Overijssel</span></div>
    </div>
  </footer>`;

  // Inject sprite immediately (before other scripts query icons)
  document.body.insertAdjacentHTML('afterbegin', SVG_SPRITE);
  const navSlot = document.querySelector('[data-nav]');
  const footSlot = document.querySelector('[data-footer]');
  if (navSlot) navSlot.outerHTML = NAV;
  if (footSlot) footSlot.outerHTML = FOOTER;

  // Nav scroll state
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Scroll-triggered fade-up
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((c, i) => {
      if (!c.hasAttribute('data-anim')) c.setAttribute('data-anim','');
      c.style.setProperty('--i', i);
      io.observe(c);
    });
  });

  // Hero entrance (progressive enhancement)
  requestAnimationFrame(() => {
    document.querySelectorAll('.hero [data-anim]').forEach(el => {
      if (el.closest('.hero') && el.closest('.hero').style.display !== 'none') {
        el.classList.add('hero-in');
      }
    });
  });
})();
