// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const menuItems = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('main section');

    // Display the 'home' section by default
    const defaultSectionId = 'home';
    const defaultSection = document.getElementById(defaultSectionId);
    if (defaultSection) {
        defaultSection.classList.add('active');
    }

    // Toggle sidebar visibility on menu button click
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Show the section corresponding to the clicked menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = item.getAttribute('data-target');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show the clicked section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Close the menu on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});
