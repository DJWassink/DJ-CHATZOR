const { ipcRenderer } = require("electron");

setInterval(() => {
  const elements = document.querySelectorAll(".CxUIE, .unread, ._0LqQ");
  let count = 0;

  for (let i = 0; i < elements.length; i += 1) {
    if (
      elements[i].querySelectorAll(".P6z4j").length === 1 &&
      elements[i].querySelectorAll('*[data-icon="muted"]').length === 0
    ) {
      count += 1;
    }
  }

  ipcRenderer.sendToHost("", count);
}, 1000);
