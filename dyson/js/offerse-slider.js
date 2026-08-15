export const offersSlider = () => {
    new Swiper(".offers__slider", {
        slidesPerView: 1,
        centeredSlides: true,

        mousewheel: {
            forceToAxis: true,
        },

        navigation: {
            nextEl: ".offers__slider-next",
            prevEl: ".offers__slider-prev",
        },
    });
};
