// Smooth Reveal on Scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);


//Dynamic Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


