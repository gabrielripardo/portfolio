let header = document.getElementsByTagName("header")[0];
let main = document.getElementsByTagName("main")[0];
let footer = document.getElementsByTagName("footer")[0];
let hamburgerBtn = document.getElementById("menu-hamburger");
let menu = document.getElementById("menu");
let navList = document.getElementById("nav-list")

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
    main.style.display = 'none'
    footer.style.display = 'none'
}

function hideMenu() {
    header.style.height = "fit-content";
    main.style.display = 'block'
    footer.style.display = 'block'
}

hamburgerBtn.addEventListener('click', clickHamburger)

