const {ipcRenderer} = require('electron');

setInterval(() => {
    const direct = document.querySelectorAll('[class^="guildsWrapper"] [class*="badge"]').length;
    const indirect = document.querySelectorAll('[class^="guildsWrapper"] [class^="guild-"]+[class*="unread-"]').length;
    
    ipcRenderer.sendToHost('', direct);
}, 1000);
