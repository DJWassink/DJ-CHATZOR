const { ipcRenderer } = require("electron");

setInterval(() => {
  const badges = document.querySelectorAll(".Badge.unread:not(.muted)");
  ipcRenderer.sendToHost("", badges.length);
  ipcRenderer.send("count", "webz-telegram", badges.length);
}, 1000);
