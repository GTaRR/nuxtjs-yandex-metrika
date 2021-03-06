const path = require('path');

module.exports = function yandexMetrika(options) {

  if (process.env.NODE_ENV === 'production') {
    // Script preload
    this.options.head.link.push({
      href:
        (options.useCDN
          ? 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch'
          : 'https://mc.yandex.ru/metrika') + '/watch.js',
      rel: 'preload',
      as: 'script'
    });

    // Add yandex metrika script to head
    this.options.head.script.push({
      src:
        (options.useCDN
          ? 'https://cdn.jsdelivr.net/npm/yandex-metrica-watch'
          : 'https://mc.yandex.ru/metrika') + '/watch.js', // add https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js
      async: 'true'
    });
  }

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: false,
    options
  });
};

module.exports.meta = require('./package.json');
