import { APP_NAME } from '../../constant';

import { browserDetect } from '../browserDetect';


import { default as en_US } from '../../locale/en_US/messages.json';


const message = {};

message.language = {
  // pack: { en_US }
  pack: { en_US }
};

// message.language.list = () => {
//
//   const list = [
//     { code: 'en_US', name: 'English' }, // English USA

//   ];
//
//   list.forEach((item) => {
//
//     if (item.code.indexOf('_') > -1) {
//       item.name = `${item.name} — ${(item.code.substring(0, item.code.indexOf('_'))).toUpperCase()} (${item.code.substring(item.code.indexOf('_') + 1, item.code.length)})`;
//     } else {
//       item.name = `${item.name} — ${(item.code).toUpperCase()}`;
//     }
//
//   });
//
//   list.unshift({ name: '—', disabled: true });
//
//   list.unshift({ code: 'system', name: message.get('menuContentLanguageSystem') });
//
//   return list;
//
// };

// message.language.name = () => message.language.list().map(item => item.name);

// message.language.code = () => message.language.list().map(item => item.code);

message.get = (stringId) => {

  let string;

  if (browserDetect().chrome && typeof chrome != 'undefined') {
    // if browser is chrome

    if ('i18n' in chrome) {
      // if installed as extension

      string = chrome.i18n.getMessage(stringId);

    } else {

      string = message.language.pack.en_US[stringId].message;

    }

  } else if (browserDetect().firefox && typeof browser != 'undefined') {
    // if browser is firefox

    if ('i18n' in browser) {
      // if installed as addon

      string = browser.i18n.getMessage(stringId);

    } else {

      string = message.language.pack.en_US[stringId].message;

    }

  } else {

    string = message.language.pack.en_US[stringId].message;

  }

  // switch (state.get.current().language) {
  //
  //   // use system language
  //   case 'system':
  //
  //     if (browserDetect().chrome && typeof chrome != 'undefined') {
  //       // if browser is chrome
  //
  //       if ('i18n' in chrome) {
  //         // if installed as extension
  //
  //         string = chrome.i18n.getMessage(stringId);
  //
  //       } else {
  //
  //         string = message.language.pack.en_US[stringId].message;
  //
  //       }
  //
  //     } else if (browserDetect().firefox && typeof browser != 'undefined') {
  //       // if browser is firefox
  //
  //       if ('i18n' in browser) {
  //         // if installed as addon
  //
  //         string = browser.i18n.getMessage(stringId);
  //
  //       } else {
  //
  //         string = message.language.pack.en_US[stringId].message;
  //
  //       }
  //
  //     } else {
  //
  //       string = message.language.pack.en_US[stringId].message;
  //
  //     }
  //
  //     break;
  //
  //     // use manually selected language
  //   default:
  //
  //     if (stringId in message.language.pack[state.get.current().language]) {
  //
  //       // string found in chosen language
  //       string = message.language.pack[state.get.current().language][stringId].message;
  //
  //     } else {
  //
  //       // or use default language
  //       string = message.language.pack.en_US[stringId].message;
  //
  //     }
  //
  //     break;
  //
  // }

  if (string && string.indexOf('{appName}') > -1) {

    string = string.replaceAll('{appName}', APP_NAME);

  }

  return string;

};

export { message };