if($('select')) {
    $('select').select2({
        dir: "rtl",
    })
}

$('.menu-item-has-children').hover(function () {
    $(this).find('>ul').stop(true, true).delay(50).slideDown(500);
}, function () {
    $(this).find('>ul').stop(true, true).delay(50).slideUp(500);
});
$('.menu-item-has-mega-menu').hover(function () {
    $(this).find('>.mega-menu').stop(true, true).delay(50).slideDown(500);
}, function () {
    $(this).find('>.mega-menu').stop(true, true).delay(50).slideUp(500);
});

$('.accordion-item-header').on('click', function () {
    if (!$(this).parent().hasClass('active')) {
        $('.accordion-item.active .accordion-item-body').slideUp()
        $('.accordion-item.active .accordion-item-header .accordion-item-icon i').toggleClass('block hidden')
        $('.accordion-item.active').removeClass('active')
    }
    $(this).parent().find('.accordion-item-body').slideToggle()
    $(this).parent().toggleClass('active')
    $(this).find('.accordion-item-icon i').toggleClass('block hidden')
})


var swiperSearchProduct = new Swiper('.swiper-search-product', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    freeMode:true,
    slidesPerView: 'auto',
    spaceBetween: 32,
});


$('.menu-button').on('click',function(e){
    e.preventDefault()
    $('.menu').animate({right:0})
    $('.backdrop').fadeIn(100)
})
$('.btn-close-menu,.backdrop').on('click',function(e){
    e.preventDefault()
    $('.menu').animate({right:'-100%'})
    $('.backdrop').fadeOut(100)
})


$('.select-sort-share').on('click', function (e) {
    e.preventDefault();
    $('.sort-share').slideDown(300)
    $('.backdrop').fadeIn(100)
})
$('.backdrop,.btn-close-sort-share').on('click', function () {
    $('.sort-share').slideUp(300)
    $('.backdrop').fadeOut(100)
})

$('.btn-close-search-box').on('click',function(e){
    e.preventDefault()
    $('.search-box').animate({right:'-100%'})
})
$('.header-search-box,.header-search-box button').on('click',function(e){
    e.preventDefault()
    $('.search-box').animate({right:0})
})

$(".tab-mega-menu").hover(function(){
    // get the data-filter value of the button
    var filterValue = $(this).attr('data-filter');

    $('.filter-item-mega-menu').not('.'+filterValue).hide();
    $('.filter-item-mega-menu').filter('.'+filterValue).show();

    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active');
});


$(".filter-tab").click(function(){
    var filterValue = $(this).attr('data-filter');

    $('.menu-filter-item').not('.'+filterValue).hide();
    $('.menu-filter-item').filter('.'+filterValue).show();

    $(this).parent().find('.active').removeClass('active')
    $(this).addClass('active');
});


$('.go-up').on('click',function(e) {
    e.preventDefault();
    $('html , body').animate({ scrollTop: 0 }, 500)
})



if($('.accordionMenu')){
    var Accordion = function(el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropDownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('active');

        if(!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.subMenu').not($next).slideUp().parent().removeClass('active');
        }
    }
    var accordion = new Accordion($('.accordionMenu'), false);
}




/** TAB **/
if($('.tab-item')){
    $(".tab-item").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        var tabContainerValue = $(this).attr('data-tab-container');
        var tabContainerValueClass = '.'+tabContainerValue;

        $(tabContainerValueClass).not('.'+filterValue).hide();
        $(tabContainerValueClass).filter('.'+filterValue).show();

        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active');
    });
}


if($(".rating-form").length){

    $(".rating-form i").click(function (){
        $(this).parent().find("i").removeClass("active")
        $(this).addClass("active")
        $(this).nextAll().addClass("active")
    })

}

if($(".modal").length){
    $(".btn-close-modal , .backdrop").click(function (e){
        e.preventDefault()
        $(".modal , .backdrop").fadeOut()
    })
    $('.btn-show-modal').click(function(e){
        e.preventDefault()
        var modalValue = $(this).attr('data-modal');
        $('.modal').not('.'+modalValue).hide();
        $('.modal').filter('.'+modalValue).fadeIn();
        $(".backdrop").fadeIn()
    })
}


/** SCROLLBAR FOR ELM **/
if($('.scroll-y-el').length){
    $(".scroll-y-el").mCustomScrollbar({
        axis:"y"
    });
}


if($('.copyboard')){
    $('.copyboard').on('click', function(e) {
        e.preventDefault();

        var copyText = $(this).attr('data-text');

        var textarea = document.createElement("textarea");
        textarea.textContent = copyText;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");


        document.body.removeChild(textarea);

        $(this).addClass('active')
        setTimeout(function() {
            $('.copyboard').removeClass('active')
        }, 5000);

    })
}


if($('.add-to-card-fix').length){
    $('body').css({marginBottom:'144px'})
}
if($('.add-to-card-fix-small').length){
    $('body').css({marginBottom:'122px'})
}