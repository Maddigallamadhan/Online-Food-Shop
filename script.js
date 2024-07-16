document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuItems = document.getElementById('menuItems');

    menuButton.addEventListener('click', function () {
        if (menuItems.style.display === 'none') {
            menuItems.style.display = 'block';
        } else {
            menuItems.style.display = 'none';
        }
    });
});
