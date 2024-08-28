// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';

export const useSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation,Pagination,Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.testimonials__slider-next',
            prevEl: '.testimonials__slider-prev',
        },
        pagination: {
            el: '.testimonials__pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }
    })
}