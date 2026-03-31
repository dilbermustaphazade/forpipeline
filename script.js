const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn && nav) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    mobileMenuBtn.textContent = isOpen ? '✕' : '☰';
  });
}

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in all fields.';
    return;
  }

  formStatus.textContent = 'Your message has been received, thank you!';
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = '';
  }, 4000);
});
