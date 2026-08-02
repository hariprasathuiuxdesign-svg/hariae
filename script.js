const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.classList.add('glass-strong');
    else nav.classList.remove('glass-strong');
  });

  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  document.querySelectorAll('.spot').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });

  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fName').value;
    const phone = document.getElementById('fPhone').value;
    const type = document.getElementById('fType').value;
    const date = document.getElementById('fDate').value;
    const msg = document.getElementById('fMsg').value;
    const text = `Hi Hari, I'd like to book a session.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProject Type: ${encodeURIComponent(type)}%0APreferred Date: ${encodeURIComponent(date)}%0ADetails: ${encodeURIComponent(msg)}`;
    window.open(`https://wa.me/916381111341?text=${text}`, '_blank');
  });
