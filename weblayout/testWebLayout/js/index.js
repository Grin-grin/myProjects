'use strict';

const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    speed: 1500,

    slidesPerView: 2,

    allowTouchMove: false,

    slidesPerColumnFill: 'row',

});