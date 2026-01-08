// hamburger menu toggle
const menuIcon = document.getElementById('menu');
const navbar = document.querySelector('header .navbar');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('nav-toggle');
    menuIcon.classList.toggle('fa-times');
});

// Close navbar when a link is clicked
const navLinks = document.querySelectorAll('header .navbar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('nav-toggle');
        menuIcon.classList.remove('fa-times');
    });
});

// Load services from JSON
async function loadServices() {
    try {
        const response = await fetch('/services/services.json');
        const services = await response.json();
        const boxContainer = document.querySelector('.services .box-container');
        
        services.forEach(service => {
            const serviceBox = document.createElement('div');
            serviceBox.className = 'box tilt';
            serviceBox.innerHTML = `
                <img draggable="false" src="${service.image}" alt="${service.title}" />
                <div class="content">
                    <div class="tag">
                        <h3>${service.title}</h3>
                    </div>
                    <div class="desc">
                        <p>${service.description}</p>
                    </div>
                </div>
            `;
            boxContainer.appendChild(serviceBox);
        });

        // Initialize Vanilla Tilt
        VanillaTilt.init(document.querySelectorAll('.services .box.tilt'), {
            max: 5,
            scale: 1.05
        });
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

// Load services when DOM is ready
document.addEventListener('DOMContentLoaded', loadServices);

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
