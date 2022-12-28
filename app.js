const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

//!
// const menuItems = [].slice.call(document.querySelectorAll('.menu__item'));
// const menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu'));
// const selectedMenu = undefined;
// const subBg = document.querySelector('.dropdown__bg');
// const subBgBtm = document.querySelector('.dropdown__bg-bottom');
// const subArr = document.querySelector('.dropdown__arrow');
// const subCnt = document.querySelector('.dropdown__wrap');
// const header = document.querySelector('.main-header');
var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
    menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
    selectedMenu = undefined,
    subBg = document.querySelector('.dropdown__bg'),
    subBgBtm = document.querySelector('.dropdown__bg-bottom'),
    subArr = document.querySelector('.dropdown__arrow'),
    subCnt = document.querySelector('.dropdown__wrap'),
    header = document.querySelector('.main-header'),
    closeDropdownTimeout,
    startCloseTimeout = function () {
        closeDropdownTimeout = setTimeout(() => closeDropdown(), 50);
    },
    stopCloseTimeout = function () {
        clearTimeout(closeDropdownTimeout);
    },
    openDropdown = function (el) {
        var menuId = el.getAttribute('data-sub');
        var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
        var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
        var menuSubBtm = menuSubCnt.querySelector('.Section').getBoundingClientRect();
        var menuMeta = el.getBoundingClientRect();
        var subMeta = menuSubCnt.getBoundingClientRect();

        selectedMenu = menuId;

        menuItems.forEach(el => el.classList.remove('active'));

        el.classList.add('active');

        menuSubs.forEach(el => el.classList.remove('active'));
        menuSub.classList.add('active');

        subBg.style.opacity = 1;
        subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
        subBg.style.width = subMeta.width + 'px';
        subBg.style.height = subMeta.height + 'px';
        subBgBtm.style.top = menuSubTop.height + 'px';
        console.log(menuSubBtm);

        subArr.style.opacity = 1;
        subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';

        subCnt.style.opacity = 1;
        subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
        subCnt.style.width = subMeta.width + 'px';
        subCnt.style.height = subMeta.height + 'px';

        menuSub.style.opacity = 1;
        header.classList.add('dropdown-active');
    },
    closeDropdown = function () {
        menuItems.forEach(el => el.classList.remove('active'));
        menuSubs.forEach(el => {
            el.classList.remove('active');
            el.style.opacity = 0;
        });
        subBg.style.opacity = 0;
        subArr.style.opacity = 0;

        selectedMenu = undefined;
        header.classList.remove('dropdown-active');
    };

menuItems.forEach(el => {

    el.addEventListener('mouseenter', function () {
    stopCloseTimeout();
    openDropdown(this);
}, false);

    el.addEventListener('mouseleave', () => startCloseTimeout(), false);
});

menuSubs.forEach(el => {
    el.addEventListener('mouseenter', () => stopCloseTimeout(), false);
    el.addEventListener('mouseleave', () => startCloseTimeout(), false);
});

//!
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