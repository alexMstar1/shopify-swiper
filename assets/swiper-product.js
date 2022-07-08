const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:12,
            initialSlide:1,
        },
        375:{
            slidesPerView:1,
            spaceBetween:12,
        },

        480:{
            slidesPerView:1,
            spaceBetween:12,
        },
        640:{
            slidesPerView:2,
            spaceBetween:12,
        },
        768:{
            slidesPerView:2,
            spaceBetween:24,
        },
        996:{
            slidesPerView:3,
            spaceBetween:24,
        },
        1279:{
            slidesPerView:4,
            spaceBetween:24,
        },
        1440:{
            slidesPerView:4,
            spaceBetween:24,

        }


    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});