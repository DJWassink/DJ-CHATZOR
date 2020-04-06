window.services = [
  {
    uuid: "6ca692fa-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Whatsapp",
    icon: "./service-icons/whatsapp.png",
    recipe: "./service-recipes/whatsapp.js",
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
    icon: "./service-icons/slack.png",
    recipe: "./service-recipes/slack.js",
    url: "https://label305.slack.com/",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
  },
  {
    uuid: "6ca69588-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Telegram",
    icon: "./service-icons/telegram.png",
    recipe: "./service-recipes/telegram.js",
    url: "https://web.telegram.org",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
    css: `.tg_head_split {
            max-width: 100% !important;
          }
          
          .im_page_wrap {
            max-width: 100% !important;
          }
          
          .im_dialogs_col_wrap {
            width: 320px !important;
          }
          
          .im_history_col_wrap {
            width: calc(100% - 320px) !important;
          }
          
          .im_message_wrap {
            max-width: inherit !important;
          }
          
          .im_message_body {
            max-width: 580px !important;
          }
          
          body.darkTheme,
          .darkTheme .modal-content {
              color: #bbb !important;
              background: #252525 !important;
          }
          .darkTheme a.tg_checkbox {
              color: #bbb !important;
          }
          .darkTheme .im_page_wrap {
              /*background color of contentwrapper under header*/
          
              background-color: #303030 !important;
              border-left: 1px solid #4d4d4d !important;
              border-right: 1px solid #4d4d4d !important;
              border-bottom: 1px solid #4d4d4d !important;
              box-shadow: none;
          }
          .darkTheme .im_message_body,
          .darkTheme .im_attach,
          .darkTheme .im_media_attach,
          .darkTheme .im_record,
          .darkTheme .im_message_document_thumbed {
              background: inherit !important;
          }
          .darkTheme .im_record_bg {
              background: transparent;
          }
          .darkTheme .im_dialog_peer {
              /*peer nickname unselected*/
          
              color: #bbb !important;
          }
          .darkTheme .contacts_modal_members_list a.contacts_modal_contact {
              /*nicknames in contactlist via hamburger menu*/
          
              color: #bbb;
          }
          .darkTheme .active a.im_dialog {
              /*selected peer */
          
              background-color: #4d4d4d !important;
          }
          .darkTheme .tg_head_split,
          .darkTheme .md_modal_head {
              /*page header block*/
          
              background-color: #4d4d4d !important;
          }
          .darkTheme .dropdown.open .tg_head_btn,
          .darkTheme .tg_head_btn:hover {
              background: #4d4d4d !important;
          }
          .darkTheme .form-control {
              /*input field*/
          
              background-color: #0e0e0e !important;
              color: #bbb !important;
          }
          .darkTheme .composer_rich_textarea {
              background: #303030 !important;
              border-color: #bbb !important;
          }
          .darkTheme .im_dialogs_col_wrap {
              /*contactlist right border*/
          
              border-right: 2px solid #4d4d4d;
          }
          .darkTheme .im_dialogs_col .nano > .nano-pane > .nano-slider {
              /*scrollbarbutton when hover*/
          
              background-color: #4d4d4d !important;
          }
          .darkTheme .tg_head_split {
              background-color: #151515;
          }
          .darkTheme .im_submit {
              color: #4d4d4d;
          }
          .darkTheme .im_message_mymention {
              background: #1d1d1d;
          }
          .darkTheme .im_message_focus .im_message_outer_wrap {
              background-color: #4d4d4d;
          }
          .darkTheme .im_message_selected .im_message_outer_wrap {
              background: #4d4d4d;
          }
          .darkTheme a:hover {
              background-color: #282828 !important;
          }
          .darkTheme .im_message_unread_split {
              background: #4d4d4d;
          }
          @keyframes im_message_focus_fade {
              0% {
                  background-color: #2d2d2d;
              }
          }
          .darkTheme .btn-primary {
              background-color: #4d4d4d;
          }
          .darkTheme .im_history_select_active .im_message_outer_wrap:hover {
              background: #4d4d4d;
          }
          .darkTheme .im_dialog_chat_from_wrap,
          .darkTheme .im_dialog_message_service {
              color: #6ac;
          }
          .darkTheme .composer_rich_textarea,
          .darkTheme .composer_textarea {
              box-shadow: 0px 3px 1px #ddd;
          }
          .darkTheme .composer_rich_textarea:focus {
              box-shadow: 0px 3px 1px #ddd !important;
          }
          .darkTheme .tg_head_logo_dropdown .dropdown-menu > li > a {
              color: #ddd;
          }
          .darkTheme .btn-primary.disabled,
          .darkTheme .btn-primary[disabled] {
              background: #4d4d4d none repeat scroll 0% 0%;
          }
          /*emoji*/
          
          .darkTheme .composer_emoji_tooltip,
          .darkTheme .icon-tooltip-tail,
          .darkTheme .dropdown-menu {
              background-color: #4d4d4d !important;
              border-color: #5d5d5d;
          }`,
  },
  {
    uuid: "6ca69599-b8ed-11e9-a2a3-2a2ae2dbcce4",
    name: "Discord",
    icon: "./service-icons/discord.png",
    recipe: "./service-recipes/discord.js",
    url: "https://discordapp.com/channels/@me",
    ua:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.87 Safari/537.36",
  },
];
