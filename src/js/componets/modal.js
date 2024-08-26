export const useModal = () => {
    const modal = document.querySelector('.modal');
    const btnOpen = document.querySelector('.hero__button')

    btnOpen.addEventListener('click', () => {
        modal.classList.add('modal--visible');
    })

    modal.addEventListener('click', event => {
        const target = event.target;
        if (target && (target.classList.contains('modal') || target.classList.contains('modal__window-cancel'))) {
            modal.classList.remove('modal--visible');
        }
    })
}