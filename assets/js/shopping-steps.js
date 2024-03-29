if ($('.count-product')) {
    $('.count-product').on('click', '.btn', function (e) {
        var input = $(this).parents('div.count-product').children('input');
        var value = parseInt(input.attr('value'));
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        if ($(this).hasClass('up')) { var op = +1; } else { var op = -1; }
        if (!(min == value && op == -1) && !(max == value && op == +1)) {
            input.attr('value', value + op)
        }
    })
}


$('.select-address-sort-box').on('click', function (e) {
    e.preventDefault();
    $('.address-sort-box').slideDown(300)
    $('.backdrop-2').fadeIn(100)
})
$('.backdrop-2').on('click', function () {
    $('.address-sort-box').slideUp(300)
    $('.backdrop-2').fadeOut(100)
})