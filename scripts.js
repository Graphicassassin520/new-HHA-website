// Sticky Navbar with Active Link Highlighting
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Quote Calculator
function calculateQuote() {
    const junkType = parseInt(document.getElementById('junk-type').value);
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const result = document.getElementById('quote-result');

    if (junkType === 0 || quantity <= 0) {
        result.textContent = 'Please select a junk type and enter a valid quantity.';
        result.style.color = '#e74c3c';
    } else {
        const total = junkType * quantity;
        result.textContent = `Estimated Cost: $${total} (Final quote may vary)`;
        result.style.color = '#27ae60';
    }
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let isValid = true;

    if (!name) {
        document.getElementById('name').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('name').classList.remove('error');
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('error');
    }

    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('phone').classList.remove('error');
    }

    if (!message) {
        document.getElementById('message').classList.add('error');
        isValid = false;
    } else {
        document.getElementById('message').classList.remove('error');
    }

    if (isValid) {
        formMessage.textContent = 'Thank you! We’ll get back to you soon.';
        document.getElementById('contact-form').reset();
    } else {
        formMessage.textContent = 'Please fill out all fields correctly.';
        formMessage.style.color = '#e74c3c';
    }
}

// Lightbox Functionality
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = alt;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close Lightbox on Outside Click
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});
