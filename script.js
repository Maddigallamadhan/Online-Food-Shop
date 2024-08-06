document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');
    const menuItems = document.getElementById('menuItems');
    const aboutSection = document.getElementById('aboutSection');

    menuButton.addEventListener('click', () => {
        window.open('menu.html', '_blank'); // Opens the menu in a new tab
    });

    aboutButton.addEventListener('click', () => {
        // Toggle display of the About section
        if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
            aboutSection.style.display = 'block';
        } else {
            aboutSection.style.display = 'none';
        }
    });
});
