document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.navbar__link, .navbar__cta');

  if (!navbar || !navToggle || !navMenu || !navOverlay) {
    console.error('Navbar: required elements not found in DOM.');
    return;
  }

  const openMenu = () => {
    navMenu.classList.add('is-open');
    navOverlay.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    navMenu.classList.remove('is-open');
    navOverlay.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isOpen = navMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  };

  navToggle.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', closeMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Sticky shadow on scroll
  let lastScrollY = window.scrollY;
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
    lastScrollY = window.scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});