const { ipcRenderer } = require("electron");

setInterval(() => {
  const count = document.querySelectorAll(
    '*[class^="wrapper-"] *[class^="numberBadge-"]'
  ).length;

  ipcRenderer.sendToHost("", count);
}, 1000);
