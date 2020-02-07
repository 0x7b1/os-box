import constants from '../../lib/constants';

export default [
  {
    name: 'My Home PC',
    os: constants.box.osList.WINDOWS.id,
    isPrivate: false,
    starsCount: 1,
    packages: [
      'MS WORD 2019',
      'MS EXCEL 2019',
      'MS POWERPOINT 2019',
      'MS OUTLOOK 2019',
      'GOOGLE CHROME',
      'CHROMIUM',
      'FIREFOX',
      'OPERA',
      'DROPBOX',
      'VIRTUALBOX',
      'SKYPE',
      'THUNDERBIRD',
      'TELEGRAM',
      'SLACK',
      'VLC',
      'SPOTIFY',
      'AUDACITY',
      'GIMP',
      'INKSCAPE',
      'BLENDER',
    ],
    scriptFiles: [
      {
        filename: "i3config0.sh",
        language: "bash",
        content: `
              #!/bin/bash

              ./symlink.sh
              ./aptinstall.sh
              ./programs.sh
              ./desktop.sh

              # Get all upgrades
              sudo apt upgrade -y

              # See our bash changes
              source ~/.bashrc

              # Fun hello
              figlet "... and we're back!" | lolcat`
      },
      {
        filename: "mycredentials.json",
        language: "json",
        content: `
              {
                "type": "user",
                "id": "7c78428f-7334-4885-a247-135ab0b17c3b",
                "name": "Carsten Ringe",
                "login": "cringe",
                "profile": {
                  "avatar": {
                    "type": "defaultavatar",
                    "url": "https://hub.jetbrains.com/api/rest/avatar/7c78428f-7334-4885-a247-135ab0b17c3b"
                  }
                },
                "key": "7c78428f-7334-4885-a247-135ab0b17c3b",
                "label": "Carsten Ringe",
                "avatar": "https://hub.jetbrains.com/api/rest/avatar/7c78428f-7334-4885-a247-135ab0b17c3b",
                "description": "cringe"
              }`
      }
    ],
    screenshots: [
      "https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg",
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2018/07/android-p-screenshot-how-to-1.jpg?itok\u003dzPiPBDd-"
    ],
    history: [
      {
        event: "Uploaded a screenshot",
        date: "01/04/2020 20:22"
      },
      {
        event: "Added Visual Studio Code",
        date: "01/05/2020 18:19"
      },
      {
        event: "Added IntelliJ",
        date: "01/04/2020 16:20"
      },
      {
        event: "Added Telegram",
        date: "01/04/2020 15:15"
      },
      {
        event: "Added qBitTorrent",
        date: "01/04/2020 15:12"
      },
      {
        event: "New installation made on a new machine",
        date: "01/03/2020 12:38"
      },
      {
        event: "Added Microsoft Office",
        date: "01/02/2020 12:38"
      },
      {
        event: "Creation of this box!",
        date: "01/02/2020 12:34"
      },
    ],
    favorites: []
  },
  {
    name: 'My Phone',
    os: constants.box.osList.ANDROID.id,
    isPrivate: false,
    starsCount: 2,
    packages: [
      'INSTAGRAM',
      'MESSENGER',
      'SHAZAM',
      'SNAPCHAT',
      'TIKTOK',
    ],
    scriptFiles: [],
    screenshots: [
      "https://www.androidpolice.com/wp-content/uploads/2019/03/Screenshot_20190313-160401.jpg",
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/xlarge/public/article_images/2018/07/android-p-screenshot-how-to-1.jpg?itok\u003dzPiPBDd-"
    ],
    history: [
      {
        event: "Added Microsoft Office",
        date: "01/02/2020 12:38"
      },
      {
        event: "Creation of this box!",
        date: "01/02/2020 12:34"
      },
    ],
    favorites: []
  },
  // this.createNewBox(constants.box.osList.LINUX.id, "Pipedrive Dev"),
  // this.createNewBox(constants.box.osList.MAC.id, "Pipedrive Design"),
  // this.createNewBox(constants.box.osList.WINDOWS.id, "Pipedrive Mngmt"),
];
