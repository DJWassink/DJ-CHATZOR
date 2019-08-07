// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

interface Service  {
    uuid: string;
    name: string;
    icon:string;
    url: string;
    ua: string;
    recipe?: string;
}

console.log(window.location);

const webviewsContainer = document.getElementById('webviews-container');
const sidebar = document.getElementById('sidebar');

((window as any).services as Service[]).forEach((service, index) => {
  const webview = document.createElement('webview');

  webview.classList.add(service.name);
  if (index === 0) {
    webview.classList.add('active');
  }
  webview.src = service.url;
  webview.useragent = service.ua;
  webview.partition="persist:service-" + service.uuid;
  webview.setAttribute('allowpopups', "on");
  if (service.recipe) {
    webview.setAttribute('preload', service.recipe);
  }

  webviewsContainer.appendChild(webview);

  const serviceButton = document.createElement('button');
  serviceButton.classList.add('service-button');
  if (index === 0) {
    serviceButton.classList.add('active');
  }
  serviceButton.style.backgroundImage = 'url(' + service.icon + ')';
  serviceButton.onclick = () => {
    Array.from(document.getElementsByClassName('service-button')).forEach(btn => {
      btn.classList.remove('active');
    });
    serviceButton.classList.add('active');
    Array.from(document.getElementsByTagName('webview')).forEach(wv => {
      wv.classList.remove('active');
    });
    webview.classList.add('active');
  }

  const serviceButtonBadge = document.createElement('span');
  serviceButtonBadge.classList.add('badge');
  serviceButton.appendChild(serviceButtonBadge);

  webview.addEventListener('ipc-message', (event) => {
    const count = event.args[0];
    if (count && count > 0) {
        serviceButtonBadge.classList.add('active');
        serviceButtonBadge.textContent = String(count);
    } else {
        serviceButtonBadge.classList.remove('active');
    }
  })

  sidebar.appendChild(serviceButton);
});