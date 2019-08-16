const { ipcRenderer } = require("electron");

const SELECTOR_CHANNELS_UNREAD =
  ".p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)";
setInterval(() => {
  const directMessages = document.querySelectorAll(
    `${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge`
  ).length;
  const allMessages =
    document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length - directMessages;

  ipcRenderer.sendToHost("", directMessages);
}, 1000);
