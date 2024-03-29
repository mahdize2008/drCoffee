if ($(".item-product-action .btn").length) {
  $(".item-product-action .btn").click(function () {
    $(this).parent().find("ul").fadeToggle();
  });
  $(document).mouseup(function (e) {
    var container = $(".item-product-action");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".item-product-action ul").fadeOut();
    }
  });
}
$('.select-logout-sort-box').on('click',function(e){
  e.preventDefault();
  $('.logout-sort-box').slideDown(300)
  $('.backdrop').fadeIn(100)
})
$('.backdrop,.btn-close-logout-sort-box').on('click', function () {
  $('.logout-sort-box').slideUp(300)
  $('.backdrop').fadeOut(100)
})
$('.select-address-sort-box').on('click',function(e){
  e.preventDefault();
  $('.address-sort-box').slideDown(300)
  $('.backdrop-2').fadeIn(100)
})
$('.select-remove-like-product-sort-box').on('click',function(e){
  e.preventDefault();
  $('.remove-like-product-sort-box').slideDown(300)
  $('.backdrop-2').fadeIn(100)
})
$('.backdrop-2').on('click', function () {
  $('.address-sort-box , .remove-like-product-sort-box ').slideUp(300)
  $('.backdrop-2').fadeOut(100)
})
if($(".next-add-address-next").length){
  $(".next-add-address-next").click(function(){
    $(".add-address-step-one").hide()
    $(".add-address-step-two").show()
  })
}

var swiperOrderStep = new Swiper('.swiper-order-step', {
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 24
});