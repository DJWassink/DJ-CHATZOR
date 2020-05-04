window.services = [
  {
    uuid: "6ca692fa-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Whatsapp",
    icon: "../app.asar.unpacked/service-icons/whatsapp.png",
    recipe: "../app.asar.unpacked/service-recipes/whatsapp.js",
    url: "https://web.whatsapp.com/",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
    css: `.app-wrapper-web .app {
              width: 100% !important;
              height: 100% !important;
              top: 0 !important;
          }`,
  },
  {
    uuid: "6ca69566-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Slack",
    icon: "../app.asar.unpacked/service-icons/slack.png",
    recipe: "../app.asar.unpacked/service-recipes/slack.js",
    url: "https://label305.slack.com/",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
  },
  {
    uuid: "6ca69588-b8ed-11e9-a2a3-2a2ae2dbcce5",
    name: "Telegram-React",
    icon: "../app.asar.unpacked/service-icons/telegram.png",
    recipe: "../app.asar.unpacked/service-recipes/telegram-react.js",
    url: "https://evgeny-nadymov.github.io/telegram-react",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
    css: `
          #app .page {
              max-width: none;
          }
          #app .message-wrapper {
              max-width: 1200px;
          }
  
          ::-webkit-scrollbar {
              width: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #282828;
            border-radius: 2px;
          }
      `,
  },
  {
    uuid: "6ca69599-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Discord",
    icon: "../app.asar.unpacked/service-icons/discord.png",
    recipe: "../app.asar.unpacked/service-recipes/discord.js",
    url: "https://discordapp.com/channels/@me",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
  },
];
