const { ipcRenderer } = require("electron");

/**
 * Somehow slack managed to kill the first interval/timeout defined below, simply register 2? :S
 */

const SELECTOR_CHANNELS_UNREAD =
  ".p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)";
setInterval(() => {}, 10000);

setInterval(() => {
  const directMessages = document.querySelectorAll(
    `${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge`
  ).length;

  ipcRenderer.sendToHost("", directMessages);
}, 1000);
