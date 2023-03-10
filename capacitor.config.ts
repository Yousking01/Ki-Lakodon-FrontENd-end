import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kilakodon.app',
  appName: 'Ki-Lakodon',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    // "SplashScreen": {
    //   "launchShowDuration": 0
    // },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
  "cordova": {}
};

export default config;
