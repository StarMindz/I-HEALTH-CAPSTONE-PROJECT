const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const navAnchor = document.querySelectorAll('.menu-item');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navAnchor.forEach(
  (navAnchors) => {
    navAnchors.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  },
);