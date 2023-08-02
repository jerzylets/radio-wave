const trigger = document.querySelectorAll('.guests__btn')
const profile = document.getElementById('guest-profile')
const dataIndex = document.querySelectorAll('[data-index]')

trigger.forEach(function (element) {
  element.addEventListener('click', function (element) {
    profile.classList.add('desc-item--active')
    trigger.forEach(e => e.classList.remove('guests__btn--active'));
    this.classList.add('guests__btn--active');


  });
})
