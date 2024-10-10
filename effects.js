// Scroll animations with AOS library
AOS.init({
    duration: 1200, // Animation duration in milliseconds
});

// Interactive skills highlight on category hover
document.querySelectorAll('.category h3').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.nextElementSibling.querySelectorAll('.language').forEach(skill => {
            skill.style.transform = 'scale(1.05)';
            skill.style.transition = 'transform 0.5s ease';
        });
    });

    category.addEventListener('mouseleave', () => {
        category.nextElementSibling.querySelectorAll('.language').forEach(skill => {
            skill.style.transform = 'scale(1)';
        });
    });
});

// Card flip effect for projects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
    });
});

// Smooth scroll back to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typewriter effect for introduction text
const txtElement = "Hi, I'm Mathias Felde Haugen!";
let i = 0;

function typeWriter() {
    if (i < txtElement.length) {
        document.getElementById("typewriter").innerHTML += txtElement.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeWriter();
});

// Loading animation for skill cards
document.querySelectorAll('.language').forEach(language => {
    language.classList.add('loading');
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.language').forEach(language => {
        language.classList.remove('loading');
    });
});
