import '/scss/main.scss';
import { useTheme } from './componets/theme';
import { useHeaderTabs } from './componets/headerTabs';
import { useBurger } from './componets/burger';
import FsLightbox from 'fslightbox';

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = new FsLightbox();
});
useTheme();
useHeaderTabs();
useBurger();