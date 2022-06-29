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
    header.style.height = "100vh"
}

function hideMenu() {
    header.style.height = "80px";
}

function goToSection() {
    console.log("going to section..")
    hamburgerBtn.checked = false;
    hideMenu()
}

hamburgerBtn.addEventListener('click', clickHamburger)
