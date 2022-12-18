const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  reloadOnPrerender: isDev,
  debug: isDev,
  i18n: {
    locales: ['en', 'ru', 'ua'],
    defaultLocale: 'en',
  },
};
