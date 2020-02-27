import mobileApps from './mobile.json';
import desktopSoftwares from './desktop.json';

const HOST_NAME = 'https://raw.githubusercontent.com/0x7b1/concept-os-config-share/master/src/lib';

function getPackageList(rawPackageList) {
  const desktopList = {};

  rawPackageList.forEach(({ name, description, icon }) => {
    desktopList[name.toUpperCase()] = {
      id: name.toUpperCase(),
      icon: `${HOST_NAME}/${icon}`,
      name,
      description
    };
  });

  return desktopList;
}

const osType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE'
};

const constants = {
  dialog: {
    mode: {
      BOX: 'BOX',
      PACKAGE: 'PACKAGE',
      SCREENSHOT: 'SCREENSHOT'
    }
  },
  box: {
    osList: {
      WINDOWS: {
        id: 'WINDOWS',
        icon: 'https://image.flaticon.com/icons/svg/882/882702.svg',
        name: 'Windows',
        type: osType.DESKTOP
      },
      LINUX: {
        id: 'LINUX',
        icon: 'https://image.flaticon.com/icons/svg/226/226772.svg',
        name: 'Linux',
        type: osType.DESKTOP
      },
      MAC: {
        id: 'MAC',
        icon: 'https://image.flaticon.com/icons/svg/2/2235.svg',
        name: 'Mac OS',
        type: osType.DESKTOP
      },
      IOS: {
        id: 'IOS',
        icon: 'https://www.superhosting.net/img/logos/apple-logo.svg',
        name: 'iOS',
        type: osType.MOBILE
      },
      ANDROID: {
        id: 'ANDROID',
        icon: 'https://image.flaticon.com/icons/svg/888/888839.svg',
        name: 'Android',
        type: osType.MOBILE
      }
    }
  },
  // packages: getOSDesktopList(),
  [`packages_${osType.MOBILE}`]: getPackageList(mobileApps),
  [`packages_${osType.DESKTOP}`]: getPackageList(desktopSoftwares)
};

export default constants;
