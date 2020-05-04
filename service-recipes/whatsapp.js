const { remote, ipcRenderer } = require("electron");

const webContents = remote.getCurrentWebContents();
const { session } = webContents;

setInterval(() => {
  const containers = Array.from(
    document.querySelectorAll('#pane-side div div[tabindex="-1"]')
  );
  const nonMuted = containers.filter(
    (container) => container.querySelector('[data-icon="muted"]') === null
  );
  const containersWithBadges = nonMuted.filter(
    (container) =>
      Array.from(container.querySelectorAll("div>span[class]")).filter(
        (el) =>
          window.getComputedStyle(el).backgroundColor === "rgb(0, 175, 156)"
      ).length > 0
  );
  ipcRenderer.sendToHost("", containersWithBadges.length);
  ipcRenderer.send("count", "whatsapp", containersWithBadges.length);
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark");
});

//Below we check every second if whatsapp cries about chrome version, if so reload the page while clearing session data
//See: https://github.com/meetfranz/recipe-whatsapp/blob/master/webview.js
setInterval(async () => {
  const elem = document.querySelector(".landing-title.version-title");
  if (elem && elem.innerText.toLowerCase().includes("google chrome")) {
    window.location.reload();
  }
}, 1000);

window.addEventListener("beforeunload", async () => {
  try {
    session.flushStorageData();
    session.clearStorageData({
      storages: [
        "appcache",
        "serviceworkers",
        "cachestorage",
        "websql",
        "indexdb",
      ],
    });

    const registrations = await window.navigator.serviceWorker.getRegistrations();

    registrations.forEach((r) => {
      r.unregister();
      console.log("ServiceWorker unregistered");
    });
  } catch (err) {
    console.info(err);
  }
});
