(function () {
  var body = document.body;
  var hero = document.querySelector('.ig-hero');
  var end = document.getElementById('reserve') || document.getElementById('begin');
  var foot = document.querySelector('.footer');
  var st = { heroOut: false, endIn: false, footIn: false };
  function update() { body.classList.toggle('is-cta-on', st.heroOut && !st.endIn && !st.footIn); }
  if ('IntersectionObserver' in window && hero) {
    new IntersectionObserver(function (e) { st.heroOut = !e[0].isIntersecting && e[0].boundingClientRect.bottom < 0; update(); }).observe(hero);
    if (end) new IntersectionObserver(function (e) { st.endIn = e[0].isIntersecting; update(); }, { threshold: 0.05 }).observe(end);
    if (foot) new IntersectionObserver(function (e) { st.footIn = e[0].isIntersecting; update(); }).observe(foot);
  }
  document.querySelectorAll('[data-cta-pos]').forEach(function (a) {
    a.addEventListener('click', function () {
      try { if (typeof gtag === 'function') gtag('event', 'cta_click', { page: location.pathname.replace(/\//g, '') || 'home', position: a.getAttribute('data-cta-pos') }); } catch (e) {}
    });
  });
})();
