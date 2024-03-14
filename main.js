let menu = document.getElementById('pageNav');
let projectList = document.getElementById('projectList');
let menuButton = document.getElementById('menuButton');

function menuToggle() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

menuButton.onclick = menuToggle;