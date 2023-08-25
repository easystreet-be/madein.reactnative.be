const appConfig = {
  website: {
    name: "Made In React Native Belgium",
    gitRepo: {
      website: "https://github.com/easystreet-be/reactnative.be",
      data: "https://github.com/easystreet-be/reactnative.be_data",
    },
    privacyPolicy: "https://reactnative.be/privacy-policy",
    cookiePolicy: "https://reactnative.be/cookie-policy",
  },
  dev: {
    website: "http://reactnative.be/",
    name: "reactnative.be",
  },
  env: {
    basePath: process.env.basePath,
    currentLocale: process.env.locale,
  },
  locales: {
    en: "https://reactnative.be/",
  },
};

export default appConfig;
