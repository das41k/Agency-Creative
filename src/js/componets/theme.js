export const useTheme = () => {
    const themeSwitcher = document.querySelector('[data-theme-switcher]');
    const themeTarget = document.querySelector('[data-theme]');
    
    const themeTargetDataset = themeTarget.dataset;
    const theme = localStorage.getItem('theme') || 'light';
    themeTargetDataset.theme = theme;

    if (theme == "dark") {
        themeSwitcher.checked = true;
    }

    themeSwitcher.addEventListener('click', () => {
        const themeDataset = themeTarget.dataset;
        if (themeDataset.theme == "light") {
            themeDataset.theme = 'dark';
            localStorage.setItem('theme','dark')
        } else {
            themeDataset.theme = 'light';
            localStorage.setItem('theme','light')
        }
    })
}