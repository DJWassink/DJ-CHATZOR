const {ipcRenderer} = require('electron')

setInterval(() => {
    let count = 0;
    const searchElement = document.querySelector('.im_dialogs_search_field');
    if (searchElement && searchElement.value === '') {
      const elements = document.querySelectorAll('.im_dialog_badge:not(.ng-hide):not(.im_dialog_badge_muted)');
      if (elements) {
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].innerHTML !== 0) {
            count += 1;
          }
        }
      }
    }
    
    ipcRenderer.sendToHost('', count);
}, 1000);
