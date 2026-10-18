const header = document.querySelector('.site-header');

function updateHeaderBackground() {
  if (!header) return;

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeaderBackground);
window.addEventListener('DOMContentLoaded', updateHeaderBackground);

const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

toggleBtn?.addEventListener('click', () => {
  toggleBtn.classList.toggle('is-active');
  mobileNav?.classList.toggle('is-active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleBtn?.classList.remove('is-active');
    mobileNav?.classList.remove('is-active');
  });
});