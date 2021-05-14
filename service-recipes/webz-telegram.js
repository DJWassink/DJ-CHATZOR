const { ipcRenderer } = require("electron");

setInterval(() => {
  const badges = Array.from(
    document.querySelectorAll(".active .chat-list .ListItem.Chat .title")
  )
    .filter((title) => !title.querySelector(".icon-muted-chat"))
    .map((title) => title.closest(".ListItem"))
    .map((chatItem) => chatItem.querySelector(".Badge.unread"))
    .filter((badge) => badge != null);
  ipcRenderer.sendToHost("", badges.length);
  ipcRenderer.send("count", "webz-telegram", badges.length);
}, 1000);
