const appConfig = {
  website: {
    name: 'Made In React Native Belgium',
    gitRepo: {
      website: 'https://github.com/easystreet-be/madein.reactnative.be',
      data: 'https://github.com/easystreet-be/madein.reactnative.be_data',
    },
    privacyPolicy: 'https://madein.reactnative.be/privacy-policy',
    cookiePolicy: 'https://madein.reactnative.be/cookie-policy',
  },
  dev: {
    website: 'http://reactnative.be/',
    name: 'reactnative.be',
  },
  env: {
    basePath: process.env.basePath,
    currentLocale: process.env.locale,
  },
  locales: {
    en: 'https://madein.reactnative.be/',
  },
};

export default appConfig;
