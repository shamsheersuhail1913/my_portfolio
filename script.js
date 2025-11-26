// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particlesContainer.appendChild(particle);
}

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// 3D card tilt effect
const cards = document.querySelectorAll('.card-3d');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
});

// Resume download functionality
document.getElementById('downloadResume').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf.docx';
    link.download = 'Shaik_Shamsheer_Suhail_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Project card click functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const previewUrl = card.getAttribute('data-preview');
        if (previewUrl && previewUrl !== 'https://your-foody-live-url.com' && previewUrl !== 'https://your-calculator-live-url.com' && previewUrl !== 'https://your-portfolio-live-url.com') {
            window.open(previewUrl, '_blank');
        } else {
            alert('Project preview URL not configured yet. Please update the data-preview attribute.');
        }
    });
});
