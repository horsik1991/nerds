const gulp = require('gulp'),
      script = require('./gulp/tasks/scripts'),
      fonts = require('./gulp/tasks/fonts'),
      vendors = require('./gulp/tasks/vendorsJS'),
      imageMinify = require('./gulp/tasks/imageMinify'),
      styles = require('./gulp/tasks/styles'),
      altcss = require('./gulp/tasks/altcss'),
      clean = require('./gulp/tasks/clean'),
      pug2html = require('./gulp/tasks/pug'),
      spriteSVG = require('./gulp/tasks/spriteSVG'),
      serve = require('./gulp/tasks/serve'),
      spritePNG = require('./gulp/tasks/spritePNG'),
      utilits = require('./gulp/tasks/utilits'),
      dev = gulp.parallel(pug2html, script, vendors, altcss, styles,  imageMinify, spriteSVG, spritePNG, fonts);


global.$ = {
    main: require('gulp'),
    bs: require('browser-sync')
};

exports.default = gulp.series(
    clean,
    dev,
    serve
);
//Для теста модулей
exports.test = gulp.series(
    utilits
);