// script.js
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home-section');
    const productSection = document.getElementById('product-section');
    const contactSection = document.getElementById('contact-section');
    const homeLink = document.getElementById('home-link');
    const productLink = document.getElementById('our-product');
    const contactLink = document.getElementById('contact-link');
    const backButton = document.getElementById('back-button');

    function showSection(sectionToShow) {
        homeSection.style.display = 'none';
        productSection.style.display = 'none';
        contactSection.style.display = 'none';

        sectionToShow.style.display = 'block';
    }

    homeLink.addEventListener('click', function() {
        showSection(homeSection);
    });

    productLink.addEventListener('click', function() {
        showSection(productSection);
    });

    contactLink.addEventListener('click', function() {
        showSection(contactSection);
    });

    backButton.addEventListener('click', function() {
        showSection(homeSection);
    });

    // Default to home section on load
    showSection(homeSection);
});


