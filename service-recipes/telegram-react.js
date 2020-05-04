const { ipcRenderer } = require("electron");

setInterval(() => {
  const badges = document.querySelectorAll(
    ".dialog-badge:not(.dialog-badge-muted)"
  );
  ipcRenderer.sendToHost("", badges.length);
  ipcRenderer.send("count", "telegram-react", badges.length);
}, 1000);
