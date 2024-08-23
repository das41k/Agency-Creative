export const useHeaderTabs = () => {
    const tabControls = document.querySelector('.header__list');
    tabControls.addEventListener('click', event => {
        const tabControl = event.target.closest('.header__item-link')
        if (!tabControl || tabControl.classList.contains('header__item-link--active')) return
        const activeControl = document.querySelector('.header__item-link--active')
        activeControl.classList.remove('header__item-link--active');
        tabControl.classList.add('header__item-link--active');
    })
}