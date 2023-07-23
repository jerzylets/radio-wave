const element = document.querySelector('.js-choice')
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  placeholderValue: '',
  itemSelectText: '',
})

// const selected = function () {
//   document.querySelector('choices__item.is-selected').setAttribute('tabindex', '-1');
// }
