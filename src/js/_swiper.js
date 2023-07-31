const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    // если будут добавлены новые слайды, следущую строчку нужно будет переписать
    slideLabelMessage: '{{index}} из трёх'
  },
});
