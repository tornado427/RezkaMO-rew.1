const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  // подключите плагины к PostCSS
  plugins: [
    // подключите autoprefixer
    autoprefixer({
      browsers: ['ie >= 7', 'last 9 version'],
      overrideBrowserslist:  ['last 9 versions'],
      cascade: false
  }),
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
    cssnano({ preset: 'default' })
  ]
};
