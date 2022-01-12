
const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const pngSprite = require('./spritePNG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  $.main.watch('dev/blocks/images/*/*.{gif,png,jpg,svg,webp}', $.main.series(imageMinify)).on('change', server.reload);
  $.main.watch('dev/blocks/images/sprite/svg/*.svg', $.main.series(svgSprite)).on('change', server.reload);
  $.main.watch('dev/blocks/images/sprite/png/*.png', $.main.series(pngSprite)).on('change', server.reload);
  $.main.watch('dev/blocks/**/*.styl', $.main.series(styles)).on('change', server.reload);
  $.main.watch('dev/blocks/**/*.js', $.main.series(script)).on('change', server.reload);
  $.main.watch('dev/blocks/**/*.pug', $.main.series(pug2html));
  $.main.watch('dist/*.html').on('change', server.reload);

  return cb()
};
