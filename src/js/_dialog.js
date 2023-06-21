if (!document.createElement('dialog').showModal) {

  import('../../node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js')
    .then(dialogPolyfill =>
      document.querySelectorAll('dialog')
        .forEach(dialogPolyfill.registerDialog)
    )
}
