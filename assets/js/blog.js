var swiperHeadArchive = new Swiper('.swiper-head-archive', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination-head-archive',
        clickable: true,
    },
});


if ($('.sidebar-box-header')) {
    $(".sidebar-box-header").click(function () {
        $(this).find('i').toggleClass("-scale-y-100")
        $(this).parent().find(".sidebar-box-body").slideToggle()
    })
}

$('.btn-close-fixed-box').on('click', function (e) {
    e.preventDefault();
    $('.fixed-box').fadeOut(300)
})
$('.select-add-comment-box').on('click', function (e) {
    e.preventDefault();
    $('.add-comment-box').fadeIn(300)
})
$('.select-comments-box').on('click', function (e) {
    e.preventDefault();
    $('.comments-box').fadeIn(300)
})

$('.backdrop').on('click', function () {
    $('.product-sort-box').slideUp(300)
    $('.backdrop').fadeOut(100)
})

$('.product-sort-select').on('click', function (e) {
    e.preventDefault();
    $('.product-sort-box').slideDown(300)
    $('.backdrop').fadeIn(100)
})


$('.product-filter-select').on('click', function (e) {
    e.preventDefault();
    $('.product-filter-box').fadeIn(300)
})
$('.btn-close-product-filter-box').on('click', function (e) {
    e.preventDefault();
    $('.product-filter-box').fadeOut(300)
})

// if ($(".swiper-p-1").length) {
var swiperP1 = new Swiper('.swiper-p-1', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
        el: '.swiper-pagination-p-1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next-p-1',
        prevEl: '.swiper-prev-p-1',
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 8,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    }
});

// }


if ($(".swiper-img").length) {
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
            depth: 180,
            modifier: 1,
            rotate: 0,
            scale: 0.8,
            slideShadows: false,
            stretch: 50,
        }
    });

    const swiperImgCount = $(".swiper-img .swiper-slide").length
    swiperImg.slideTo(swiperImgCount / 2)


}

if ($(".swiper-p-sidebar").length) {
    var swiperPSidebar = new Swiper('.swiper-p-sidebar', {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination-p-sidebar',
            clickable: true,
        },
        effect: "coverflow",
        coverflowEffect: {
            depth: 100,
            modifier: 1,
            rotate: 0,
            scale: 0.9,
            slideShadows: false,
            stretch: 84,
        }
    });


    const swiperPSidebarCount = $(".swiper-p-sidebar .swiper-slide").length
    swiperPSidebar.slideTo(swiperPSidebarCount / 2)

}

var swiperComments = new Swiper('.swiper-comments', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: '12'
});