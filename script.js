// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();

// Mobile Menu Toggle (Simple alert for demo purposes)
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
mobileMenuIcon.addEventListener('click', () => {
    alert('Menu mobile click - implement slide-out menu here.');
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ambient Sound Toggle
const soundToggle = document.getElementById('sound-toggle');
const bgAudio = document.getElementById('bg-audio');
let isPlaying = false;

if (soundToggle && bgAudio) {
    soundToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgAudio.pause();
            soundToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            soundToggle.style.boxShadow = 'var(--neon-glow)';
            soundToggle.style.color = 'var(--primary-color)';
        } else {
            bgAudio.play();
            soundToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
            soundToggle.style.boxShadow = '0 0 20px #ff3366';
            soundToggle.style.color = '#ff3366';
        }
        isPlaying = !isPlaying;
    });
}
