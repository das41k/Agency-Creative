export const useBurger = () => {
    const burgerIcon = document.querySelector('.header-burger');
    const overlay = document.querySelector('.overlay');
    const burgerLink = document.querySelector('.header__item-link')

    const burgerMenuList = document.querySelector('.header__list');
    const burgerMenuOp = document.querySelector('.header__right'); 
    const logo = document.querySelector('.header__logo');
    
    function closeBurgerMenu() {
        burgerMenuList.classList.remove('header__list--visible');
        burgerMenuOp.classList.remove('header__right--visible')
        overlay.classList.remove('overlay--visible');
        burgerIcon.classList.remove('header-burger--active');
        logo.classList.remove('header__logo--visible');
    }
    function toggleBurgerMenu() {
        burgerMenuList.classList.toggle('header__list--visible');
        burgerMenuOp.classList.toggle('header__right--visible')
        overlay.classList.toggle('overlay--visible');
        burgerIcon.classList.toggle('header-burger--active');
        logo.classList.toggle('header__logo--visible')
    }
    document.addEventListener('click', event => {
        const target = event.target;
        if (target && target.classList.contains('header-burger')) {
            toggleBurgerMenu();
        }
        else if (target && (target.classList.contains('header__item-link') || target.classList.contains('overlay'))) {
            closeBurgerMenu();
        }
    })
}