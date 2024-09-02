import $ from 'jquery';

$('.popup__order-list').on('click', '.popup__order-item--del', function () {
  $(this).closest('.popup__order-item').addClass('popup__order-item--removed');
  let timer = setTimeout(() => $(this).closest('.popup__order-item').css('display', 'none'), 10000);
  $(this)
    .siblings('.popup__order-item--back')
    .on('click', function () {
      $(this).closest('.popup__order-item').removeClass('popup__order-item--removed');
      clearTimeout(timer);
    });
});

if ($('#popup__order')) {
  function price() {
    const scrollPosition = $('#popup__order').scrollTop();

    const fromTop = $('#popup__order').height();
    const fromTopasd = $('#popup__order').find('.popup__body').height() - fromTop;

    if (scrollPosition >= fromTopasd) {
      $('.popup__order--mob').removeClass('active');
    } else {
      $('.popup__order--mob').addClass('active');
    }
  }
  price();
  $('#popup__order').on('scroll', function () {
    price();
  });
}
