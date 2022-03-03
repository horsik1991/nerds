const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const stylus = require('gulp-stylus');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');

// Работаем со стилями

module.exports = function utilits() {
    return gulp.src(['dev/static/utilits/vars.styl','dev/static/utilits/*.styl'])
        .pipe(concat('utilits.styl'))
        .pipe(plumber())
        .pipe(gulpif(!argv.prod, sourcemaps.init()))
        .pipe(stylus())
        .pipe(autoprefixer({
            overrideBrowserslist:  [ "last 4 version" ],
            cascade: false
        }))

        .pipe(gulpif(!argv.prod, sourcemaps.write()))
        .pipe(gulp.dest('dist/static/css/utilits'))
};

