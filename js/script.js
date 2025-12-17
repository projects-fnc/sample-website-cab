const menuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
