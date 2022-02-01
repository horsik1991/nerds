const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const altcss = require('./gulp/tasks/altcss');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');
const utilits = require('./gulp/tasks/utilits');
//const favicons = require('./gulp/tasks/favicons');
const dev = gulp.parallel(pug2html, script, vendors, utilits, styles, altcss, imageMinify, spriteSVG, spritePNG, fonts);
//noinspection JSAnnotator
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