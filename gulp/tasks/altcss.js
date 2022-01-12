const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');

module.exports = function altcss() {
    return gulp.src(['dev/blocks/styles/libs/*.css'])
        .pipe(concat('libs.css'))
        .pipe(plumber())
        .pipe(gulpif(!argv.prod, sourcemaps.init()))
        .pipe(autoprefixer({
            overrideBrowserslist:  [ "last 4 version" ],
            cascade: false
        }))
        .pipe(gulp.dest('dist/static/css/libs'))
};