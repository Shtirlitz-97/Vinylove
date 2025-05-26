document.addEventListener('DOMContentLoaded', function() {
  const menus = document.querySelectorAll('.nav');

  menus.forEach(navMenu => {
    const container = navMenu.parentElement;

    const hamburger = container.querySelector('.hamburger');
    const closeBtn = navMenu.querySelector('.close-menu');
    const body = document.body;

    function openMenu() {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
      body.classList.add('menu-open');

      const icon = hamburger.querySelector('svg');
    }

    function closeMenu() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');

      const icon = hamburger.querySelector('svg');
    }

    hamburger.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    closeBtn.addEventListener('click', closeMenu);

    const navLinks = navMenu.querySelectorAll('.nav__list a, .nav__list button');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });
});