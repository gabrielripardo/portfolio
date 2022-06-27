let body = document.getElementsByTagName("body")[0]
let header = document.getElementsByTagName("header")[0];
let main = document.getElementsByTagName("main")[0];
let footer = document.getElementsByTagName("footer")[0];
let hamburgerBtn = document.getElementById("menu-hamburger");
let menu = document.getElementById("menu");
let navList = document.getElementsByClassName("nav-list")[0]

function clickHamburger() {
    console.log('clicou');
    if (hamburgerBtn.checked) {
        showMenu()
    } else {
        hideMenu()
    }
}

function showMenu() {
    console.log('showMenu')
    header.style.height = "100vh"
    navList.className = 'nav-list-opened'
}

function hideMenu() {
    console.log('hideMenu')
    header.style.height = "fit-content";
    navList.className = 'nav-list'
}

function openPage() {
    console.log("abrindo página..")
}

function goToSection() {
    console.log("going to section..")
    hamburgerBtn.checked = false;
    hideMenu()
}

hamburgerBtn.addEventListener('click', clickHamburger)
