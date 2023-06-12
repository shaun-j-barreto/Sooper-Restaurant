window.onload = function () {

    const menu_button = document.querySelector('.hamburger');
    const hamburger_menu = document.querySelector('.ham-navbar');
    
    menu_button.addEventListener('click',function () {
        hamburger_menu.classList.toggle('is-active');
        menu_button.classList.toggle('is-active');
        
    });
};