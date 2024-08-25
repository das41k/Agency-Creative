export const useServicesTabs = () => {
    const tabsList = document.querySelector('.services__list');
    tabsList.addEventListener('click', event => {
        const target = event.target;
        const tabControl = target.closest('.services__item-tab');
        if (!tabControl) return
        event.preventDefault();
        if (tabControl.classList.contains('.services__item-tab--active')) return;
        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const tabControlActive = document.querySelector('.services__item-tab--active');
        const tabContentActive = document.querySelector('.services__text--active');
        if (tabControlActive) {
            tabControlActive.classList.remove('services__item-tab--active');
        }
        if (tabContentActive) {
            tabContentActive.classList.remove('services__text--active');
        }
        tabContent.classList.add('services__text--active');
        tabControl.classList.add('services__item-tab--active');
    })
}