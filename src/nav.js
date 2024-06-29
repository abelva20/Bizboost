window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if (window.scrollY > fixed ) {
        header.classList.add('navbar-fixed');
    }
    else {
        header.classList.remove('navbar-fixed');
    }
};