$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');

    $this.countdown(finalDate, function (event) {
        var $this = $(this).html(event.strftime(''
            + '<li class="special-single-count-item"> %S</li>  '
            + '<li class="special-single-count-item-dots">:</li>  '
            + '<li class="special-single-count-item"> %M</li>  '
            + '<li class="special-single-count-item-dots">:</li>  '
            + '<li class="special-single-count-item"> %H</li>  '
            + '<li class="special-single-count-item-dots">:</li>  '
            + '<li class="special-single-count-item"> %D</li>  '
        ));
    });
});


$('.btn-close-fixed-box').on('click', function (e) {
    e.preventDefault();
    $('.fixed-box').fadeOut(300)
})
$('.select-specifications-box').on('click', function (e) {
    e.preventDefault();
    $('.specifications-box').fadeIn(300)
})
$('.select-add-comment-box').on('click', function (e) {
    e.preventDefault();
    $('.add-comment-box').fadeIn(300)
})

$('.select-overview-box').on('click', function (e) {
    e.preventDefault();
    $('.overview-box').fadeIn(300)
})

$('.select-send-question-box').on('click', function (e) {
    e.preventDefault();
    $('.send-question-box').fadeIn(300)
})

$('.select-question-box').on('click', function (e) {
    e.preventDefault();
    $('.question-box').fadeIn(300)
})

$('.select-comments-box').on('click', function (e) {
    e.preventDefault();
    $('.comments-box').fadeIn(300)
})

var swiperP1 = new Swiper('.swiper-p-1', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
        el: '.swiper-pagination-p-1',
        clickable: true,
    },
    slidesPerView: 1,
});

var swiperArticles = new Swiper('.swiper-articles', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});

var swiperComments = new Swiper('.swiper-comments', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    freeMode:true,
    spaceBetween:'12'
});

var swiperQuestion = new Swiper('.swiper-question', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    freeMode:true,
    spaceBetween:'12'
});

var swiperP = new Swiper('.swiper-p', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 'auto',
    spaceBetween: 12,
});




$(".add-property").click(function () {
    let inputVal = $(this).parent().find("input").val()
    if (!inputVal) {
        return false
    } else {
        if ($(this).hasClass("add-negative")) {
            let listItem = `
        <li class="flex items-center  mb-1.5 last:mb-0"> 
            <i class="text-brown-light text-[10px] icon-close w-6 h-6 bg-natural flex items-center justify-center ml-1.5 rounded-full transition-all hover:bg-brown hover:text-white cursor-pointer"></i>
            <i class="icon-minus text-danger text-base ml-1.5"></i>
            <div class="text-sm-plus text-brown font-medium">${inputVal}</div>
        </li>
            `;
            $(this).parent().parent().find(".property-list").append(listItem)

        }
        if ($(this).hasClass("add-positive")) {
            let listItem = `
        <li class="flex items-center  mb-1.5 last:mb-0"> 
            <i class="text-brown-light text-[10px] icon-close w-6 h-6 bg-natural flex items-center justify-center ml-1.5 rounded-full transition-all hover:bg-brown hover:text-white cursor-pointer"></i>
            <i class="icon-add text-success text-base ml-1.5"></i>
            <div class="text-sm-plus text-brown font-medium">${inputVal}</div>
        </li>
            `;
            $(this).parent().parent().find(".property-list").append(listItem)

        }


        $($(".property-list li")).each(function () {
            if ($('li:contains("' + $(this).text() + '")', '.property-list').length > 1)
                $(this).remove();
        });

    }


})