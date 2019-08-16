// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const {shell} = require('electron').remote;

const ALLOWED_PROTOCOLS = ['https:', 'http:', 'ftp:'];

(window as any).openUrl = (url: string) => {
    if (ALLOWED_PROTOCOLS.some(protocol => url.startsWith(protocol))) {
        shell.openExternal(url);
    }
};
