var swiperImg = new Swiper('.swiper-img', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination-img',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-next-img',
        prevEl: '.swiper-prev-img',
    },
    effect:"coverflow",
    coverflowEffect: {
        depth: 100,
        modifier: 1,
        rotate: 0,
        scale: 0.8,
        slideShadows: false,
        stretch: 0,
    }
});

const swiperImgCount = $(".swiper-img .swiper-slide").length
swiperImg.slideTo(swiperImgCount / 2)