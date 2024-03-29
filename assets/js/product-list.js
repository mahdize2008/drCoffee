if ($('.sidebar-box-header')) {
    $(".sidebar-box-header").click(function () {
        $(this).find('i').toggleClass("-scale-y-100")
        $(this).parent().find(".sidebar-box-body").slideToggle()
    })
}

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

if ($(".swiper-category")) {
    var swiperCategory = new Swiper('.swiper-category', {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        pagination: {
            el: '.swiper-pagination-category',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-next-category',
            prevEl: '.swiper-prev-category',
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                freeMode: true,
                spaceBetween: 8,
            },
            992: {
                slidesPerView: 8,
                spaceBetween: 16,
            },
        }
    });

}


var swiperProductCat = new Swiper('.swiper-product-cat', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    direction: 'rtl',
    range: {
        'min': 0,
        'max': 100
    }
});
let lowerDiv = document.getElementById("lowerVal")
let upperDiv = document.getElementById("upperVal")
slider.noUiSlider.on("update", function (e) {

    lowerDiv.innerText = e[0]
    upperDiv.innerText = e[1]
})