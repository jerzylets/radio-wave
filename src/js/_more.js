const showMore = document.querySelector('.btn-more')
const podcastsLength = document.querySelectorAll('.podcasts__item').length
let items = 8

showMore.addEventListener('click', () => {
  items += 4
  const array = Array.from(document.querySelector('.podcasts__grid').children)
  const visibleItems = array.slice(0, items)
  visibleItems.forEach(el => el.classList.add('is-visible'))

  if (visibleItems.length === podcastsLength) {
    showMore.style.display = 'none';
  }
})
