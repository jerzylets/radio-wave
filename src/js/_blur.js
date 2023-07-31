let blur = document.querySelectorAll('.programs__link');
let blurImage = document.querySelectorAll('.programs__image');

blur.forEach(function (element) {
  element.addEventListener('mouseenter', function (e) {
    const path = e.currentTarget.dataset.path;

    blurImage.forEach(function (element) { });
    document.querySelector(`[data-target="${path}"]`).classList.add('programs__image--muddy');
  });

  element.addEventListener('mouseleave', function (e) {
    const path = e.currentTarget.dataset.path;

    blurImage.forEach(function (element) { });
    document.querySelector(`[data-target="${path}"]`).classList.remove('programs__image--muddy');
  });
});
