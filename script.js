  const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactButton = document.getElementById('contactButton');
const contactDetails = document.getElementById('contactDetails');
const backTop = document.getElementById('backTop');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

contactButton.addEventListener('click', () => {
  const shouldShow = contactDetails.hidden;
  contactDetails.hidden = !shouldShow;
  contactButton.textContent = shouldShow ? 'Hide Contact Details' : 'Show Contact Details';
});

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();
