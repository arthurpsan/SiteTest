// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {

    // --- 1. Get all the elements ---
    const navLinks = document.getElementById('navLinks');
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');
    // Get all the links inside the mobile nav
    const navLinksList = document.querySelectorAll('#navLinks ul li a');

    // --- 2. Define the functions ---

    // Function to show the menu
    function showMenu() {
        navLinks.classList.add('active');
    }

    // Function to hide the menu
    function hideMenu() {
        navLinks.classList.remove('active');
    }

    // --- 3. Add the event listeners ---

    // Listen for clicks on the open/close icons
    openMenu.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', hideMenu);

    // Listen for clicks on EACH nav link
    navLinksList.forEach(link => {
        link.addEventListener('click', hideMenu);
    });

});