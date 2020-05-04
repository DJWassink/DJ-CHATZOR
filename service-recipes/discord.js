const { ipcRenderer } = require("electron");

setInterval(() => {
  const count = document.querySelectorAll(
    '*[class^="wrapper-"] *[class^="numberBadge-"]'
  ).length;

  ipcRenderer.sendToHost("", count);
  ipcRenderer.send("count", "discord", count);
}, 1000);
