window.onscroll = function() {navSwitch()};

function navSwitch() {
    const nav = document.getElementById('navbar');
    const navHeight = nav.offsetHeight;
    //console.log(navHeight);
    //console.log(window.scrollY);
    if (window.scrollY >= navHeight) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
}

function unavailable() {
    alert("This feature is not yet available.");
}

document.getElementById('navLogo').addEventListener('mouseover', changeLogo);
document.getElementById('navLogo').addEventListener('mouseout', changeLogo);

function changeLogo() {
    const logo = document.getElementById('navLogo');
    if (logo.src.match('img/logo.png')) {
        logo.src = 'img/logo-white.png';
    } else {
        logo.src = 'img/logo.png';
    }
}