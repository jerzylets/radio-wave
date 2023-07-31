const element = document.querySelector('.js-choice')
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  placeholderValue: '',
  itemSelectText: '',
})

const selected = () => {
  document.getElementsByClassName('choices__item--choice').style.color = 'red';
};
