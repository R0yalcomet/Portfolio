let menu = document.getElementById('pageNav');
let list = document.getElementById('projectList');
let menuButton = document.getElementById('menuButton');
let listButton = document.getElementById('listButton');

function menuToggle() {
    menu.classList.toggle('showMenu');
    list.style.display = 'none';
}

menuButton.addEventListener('click', menuToggle);

function listToggle() {
    // list.classList.toggle('showList');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}

listButton.addEventListener('click', listToggle);