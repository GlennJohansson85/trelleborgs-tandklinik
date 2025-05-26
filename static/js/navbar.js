document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});