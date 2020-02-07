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
    scriptFiles: [],
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
      'BOLT',
      'FACEBOOK',
      'INSTAGRAM',
      'MESSENGER',
      'REDDIT',
      'SHAZAM',
      'SNAPCHAT',
      'TIKTOK',
      'TINDER',
      'UBER',
      'COURSERA',
      'NETFLIX',
      'TWITCH',
      'DUOLINGO',
      'GOLF BATTLE',
      'WORD CHUMS',
      'DRAGONS: TITAN UPRISING',
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
  {
    name: 'Pipedrive Dev',
    os: constants.box.osList.LINUX.id,
    isPrivate: false,
    starsCount: 1,
    packages: [
      'CHROMIUM',
      'FIREFOX',
      'DROPBOX',
      'VIRTUALBOX',
      'VISUAL STUDIO CODE',
      'INTELLIJ IDEA',
      'SUBLIME TEXT',
      'GIT',
      'SOURCETREE',
      'HYPER',
      'PYTHON',
      'JAVA',
      'SKYPE',
      'THUNDERBIRD',
      'TELEGRAM',
      'SLACK',
      'VLC',
      'SPOTIFY',
    ],
    scriptFiles: [
      {
        filename: 'i3config0.sh',
        language: 'bash',
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
        filename: 'mycredentials.json',
        language: 'json',
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
      },
      {
        filename: 'genscript.py',
        language: 'python',
        content: `
          class Foo:
            def get(self, files):
                  yield from roundrobin(*files)

          # calling code:
          foo = Foo() # or however it is initialized

          with open(files_list) as fl:
              filenames = [x.strip() for x in fl]
          with ExitStack() as stack:
              files = [stack.enter_context(open(fname)) for fname in filenames]
              for line in foo.get(files):
                  do_something_with_line(line)x`
      },
      {
        filename: 'codei9rprog.sh',
        language: 'bash',
        content: `
          git remote -v
          # View existing remotes
          # origin  https://github.com/user/repo.git (fetch)
          # origin  https://github.com/user/repo.git (push)

          git remote set-url origin https://github.com/user/repo2.git
          # Change the 'origin' remote's URL

          git remote -v
          # Verify new remote URL
          # origin  https://github.com/user/repo2.git (fetch)
          # origin  https://github.com/user/repo2.git (push)`
      },
    ],
    screenshots: [],
    history: [],
    favorites: []
  },
  {
    name: 'Pipedrive Design',
    os: constants.box.osList.MAC.id,
    isPrivate: false,
    starsCount: 1,
    packages: [
      'MS WORD 2019',
      'MS EXCEL 2019',
      'MS POWERPOINT 2019',
      'GOOGLE CHROME',
      'DROPBOX',
      'VISUAL STUDIO CODE',
      'GIT',
      'SOURCETREE',
      'FIGMA',
      'SKETCH',
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
    scriptFiles: [],
    screenshots: [],
    history: [],
    favorites: []
  },
  {
    name: 'Pipedrive Mngmt',
    os: constants.box.osList.WINDOWS.id,
    isPrivate: false,
    starsCount: 1,
    packages: [
      'MS WORD 2019',
      'MS EXCEL 2019',
      'MS POWERPOINT 2019',
      'MS OUTLOOK 2019',
      'MS PROJECT',
      'MS TEAMS',
      'GOOGLE CHROME',
      'DROPBOX',
      'SUBLIME TEXT',
      'GIT',
      'SOURCETREE',
      'VLC',
      'SPOTIFY',
    ],
    scriptFiles: [],
    screenshots: [],
    history: [],
    favorites: []
  },
];
