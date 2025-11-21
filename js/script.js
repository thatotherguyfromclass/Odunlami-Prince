// Init AOS
AOS.init({ once: false, duration: 700, easing: 'ease-out-cubic' });

// Year
document.getElementById('year').textContent = new Date().getFullYear();

const toggler = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon');

toggler.addEventListener('click', () => {
    icon.classList.toggle('open');
});
