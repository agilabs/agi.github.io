const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', show);

function show() {
    //Burger Animation
    nav.classList.toggle('nav-active');
    burger.classList.toggle('close');
    
    //Animate Links
    for (var index = 0; index < navLinks.length; index++) {
        if(navLinks[index].style.animation){
            navLinks[index].style.animation = '';
        } else {
            navLinks[index].style.animation = 'navLinkFade 0.3s ease forwards';
        }
    };
}