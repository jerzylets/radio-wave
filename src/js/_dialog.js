if (!document.createElement('dialog').showModal) {

  import('../../node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js')
    .then(dialogPolyfill =>
      document.querySelectorAll('dialog')
        .forEach(dialogPolyfill.registerDialog)
    )
}

const modalTrigger = document.querySelector('.entry-btn')
const dialog = document.querySelector('.entry-window')
const closeButton = document.querySelector('.entry-window__btn-close')

modalTrigger.addEventListener("click", openModalAndLockScroll);
dialog.addEventListener("close", returnScroll);
closeButton.addEventListener('click', closeModal)

function openModalAndLockScroll() {
  dialog.showModal();
  document.body.classList.add("scroll-lock");
}

function returnScroll() {
  document.body.classList.remove("scroll-lock");
}

function closeModal() {
  dialog.close();
  document.body.classList.remove("scroll-lock");
}

dialog.addEventListener("click", e => {
  const dialogDimensions = dialog.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close()
  }
})

