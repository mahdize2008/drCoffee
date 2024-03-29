var swiperCategory = new Swiper('.swiper-category', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});
var swiperArticles = new Swiper('.swiper-articles', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});


var swiperMainSlide = new Swiper('.swiper-main-slide', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination-main-slide',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-main-slide',
        prevEl: '.swiper-prev-main-slide',
    },
});

var swiperP = new Swiper('.swiper-p', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination-p',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-p',
        prevEl: '.swiper-prev-p',
    },
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 32, 0],
            scale: 0.88
        },
        next: {
            // will set `translateX(100%)` on next slides
            translate: [0, 32, 0],
            scale: 0.88
        },
    },
});

$('.dropdown').on('click', function () {
    $(this).toggleClass('active')
    $(this).children('.dropdown-body').slideToggle()
    $(this).children('.dropdown-button').find('.dropdown-icon').toggleClass('hidden')
})

var swiperPSpecial = new Swiper('.swiper-p-special', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
    pagination: {
        el: '.swiper-pagination-p-special',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-p-special',
        prevEl: '.swiper-prev-p-special',
    },
});

var swiperP1 = new Swiper('.swiper-p-1', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});


var swiperP2 = new Swiper('.swiper-p-2', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 5,
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination-p-2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-p-2',
        prevEl: '.swiper-prev-p-2',
    },
});

var swiperPartners = new Swiper('.swiper-partners', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode:true
});


var swiperImg = new Swiper('.swiper-img', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination-img',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-img',
        prevEl: '.swiper-prev-img',
    },
    effect: "coverflow",
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





function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}
$('[data-countdown-end]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown-end');


    let nowDate = new Date()
    let startDate = $(this).data('countdown-start');
    let endDate = $(this).data('countdown-end');
    let durationDate = toTimestamp(endDate) - toTimestamp(startDate)
    let currentDuration = toTimestamp(nowDate) - toTimestamp(startDate)
    let percentCurrent = currentDuration / durationDate * 100
    $(this).find('.item-product-countdown-bar div').css('width', `${percentCurrent}%`)

    $this.countdown(finalDate, function (event) {
        var $this = $(this).find('ul').html(event.strftime(''
            + '<li class="item-product-countdown-li"> %S</li>  '
            + '<li class="item-product-countdown-li-dots">:</li>  '
            + '<li class="item-product-countdown-li"> %M</li>  '
            + '<li class="item-product-countdown-li-dots">:</li>  '
            + '<li class="item-product-countdown-li"> %H</li>  '
            + '<li class="item-product-countdown-li-dots">:</li>  '
            + '<li class="item-product-countdown-li"> %D</li>  '
        ));
    });

});


