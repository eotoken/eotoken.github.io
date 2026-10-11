(() => {
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  }));

  const nav = document.querySelector('.nav');
  const links = document.querySelector('.nav-links');
  if (nav && links && !document.querySelector('.menu-toggle')) {
    const btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', '메뉴 열기');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'primary-nav');
    links.id = links.id || 'primary-nav';
    btn.innerHTML = '<span class="menu-toggle-box" aria-hidden="true"><i></i><i></i><i></i></span>';
    nav.insertBefore(btn, links);
    const close = () => { links.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','메뉴 열기'); };
    btn.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) close(); });
  }
})();
