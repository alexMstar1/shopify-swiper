const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: false,
    focusableElements: ['input','string'],
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:12,
            centeredSlides: true,
        },
        375:{
            slidesPerView:1,
            spaceBetween:12,
            navigation: false,
            centeredSlides: true,
        },

        480:{
            slidesPerView:1,
            spaceBetween:12,
            navigation: false,
            centeredSlides: true,
        },
        640:{
            slidesPerView:2,
            spaceBetween:12,
            centeredSlides: false,
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



    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },


});

let d = document.querySelectorAll('form[action="/cart/add"]');
[].forEach.call(d, function (disableUpdate){
    disableUpdate.addEventListener('submit', (e) =>{
        e.preventDefault();
        let t = e.target;
        let o = {
            id:t['id'].value,
            quantity: 1,
            sections: "header",
        };
        fetch(window.Shopify.routes.root +'cart/add.js',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(o)
        })
            .then(async response => {
                let r = await response.json();
                let takeHeader = document.querySelector('.shopify-section-header-sticky');
                takeHeader.innerHTML = r.sections.header;

                return response.json()

            })

        }

    )
});

