'use strict';

(function() {
    const ESC_KEY_CODE = 27;
    const TIMEOUT_HIDE_MENU = 590;

    const pageHeader = document.querySelector('.page-header');
    const openMenuButton = document.querySelector('.button--open-menu');
    const closeMenuButton = pageHeader.querySelector('.button--close-menu');
    const overlay = document.querySelector('.overlay');
    const pageHeaderLinks = pageHeader.querySelectorAll('a[href]');

    const onEscPress = (evt) => {
        if (evt.keyCode === ESC_KEY_CODE) {
          closeMenu();
        }
    };

    const hideMenu = () => {
        pageHeader.classList.add('page-header--hidden');
        document.body.style.paddingRight = ``;
        document.body.classList.remove(`body_hidden`);
    };

    const openMenu = () => {
        document.body.classList.add(`body_hidden`);
        overlay.classList.add('overlay--show');
        pageHeader.classList.remove('page-header--hidden');
        pageHeader.classList.remove('page-header--closed');
        pageHeader.classList.add('page-header--opened');
        document.addEventListener(`keydown`, onEscPress);
    };

    const closeMenu = () => {
        pageHeader.classList.remove('page-header--opened');
        pageHeader.classList.add('page-header--closed');
        setTimeout(hideMenu,TIMEOUT_HIDE_MENU);
        overlay.classList.remove('overlay--show');
        document.removeEventListener(`keydown`, onEscPress);
    };

    const onOpenMenuButtonClick = () => {
        openMenu();
    };

    const onCloseMenuButtonClick = () => {
        closeMenu();
    };

    openMenuButton.addEventListener('click', onOpenMenuButtonClick);
    closeMenuButton.addEventListener('click', onCloseMenuButtonClick);
    overlay.addEventListener('click', onCloseMenuButtonClick);
    pageHeaderLinks.forEach(link => link.addEventListener('click', (evt) => {
        closeMenu();
    }));
})();