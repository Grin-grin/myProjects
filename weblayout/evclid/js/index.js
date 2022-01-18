window.addEventListener('DOMContentLoaded', function() {

    //активация меню(бургер)
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.add('is-active');
    });

    document.querySelector('#close_burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.remove('is-active');
    });

    //слайдер

    var mySwiper1 = new Swiper('.swiper-container', {
        // Optional parameters
        
        // If we need pagination
        pagination: {
             el: '.swiper-pagination',
             type: 'bullets',
             clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            hide: false,
        },
        
        speed: 1500,
        
        spaceBetween: 0,

        slidesPerView: 1,
                
        allowTouchMove: false,
                
        slidesPerColumnFill: 'row',
               
    });

    // var mySwiper = new Swiper('.swiper-container', {

    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true,
    //    },
    //    // Navigation arrows
    //    navigation: {
    //        nextEl: '.swiper-button-next',
    //        prevEl: '.swiper-button-prev',
    //    },
        
    //     // And if we need scrollbar
    //     scrollbar: {
    //         hide: false,
    //     },

    //     resizeObserver: 'true',

    //     slidesPerColumnFill: 'column',
    //     slidesPerView: 1,
    //     slidesPerGroup: 1,
    //     allowTouchMove: false,

    // });

    //аккардион
    $( function() {
        $( "#accordion" ).accordion();
    });

    //табы
    document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.tab-content').forEach(function(tabContent) {
               tabContent.classList.remove('tab-content-active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });
})
