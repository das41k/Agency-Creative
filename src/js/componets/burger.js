export const useBurger = () => {
    document.addEventListener('click',burgerInit);
    function burgerInit(e) {
        const burgerIcon = e.target.closest('.header-burger');
        const burgerLink = e.target.closest('.header__item-link');
        if (!burgerIcon && !burgerLink) return;
        
        const burgerMenuList = document.querySelector('.header__list');
        const burgerMenuOp = document.querySelector('.header__right'); 
        const overlay = document.querySelector('.overlay')
        const logo = document.querySelector('.header__logo')
        
        burgerMenuList.classList.toggle('header__list--visible');
        burgerMenuOp.classList.toggle('header__right--visible')
        overlay.classList.toggle('overlay--visible');
        burgerIcon.classList.toggle('header-burger--active');
        logo.classList.toggle('header__logo--visible');
    }
}