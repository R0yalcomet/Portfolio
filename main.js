let menu = document.getElementById('pageNav');
let list = document.getElementById('projectList');
let menuButton = document.getElementById('menuButton');
let listButton = document.getElementById('listButton');
let arrow = document.getElementById('dropDown');
let smallMenu = document.getElementById('mobileMenu');

function menuToggle() {
    menu.classList.toggle('showMenu');
    listClose();
}

menuButton.addEventListener('click', menuToggle);
smallMenu.addEventListener('click', menuToggle);

function listToggle() {
    if (list.style.display === 'block') {
        listClose();
    } else {
        list.style.display = 'block';
        arrow.classList.add('collapse');
    }
}

function listClose() {
    list.style.display = 'none';
    arrow.classList.remove('collapse');
}

listButton.addEventListener('click', listToggle);