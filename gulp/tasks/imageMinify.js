
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

// Минификация и оптимизация изображений

module.exports = function imageMinify() {
  return $.main.src(
    ['dev/blocks/images/**/*.{gif,png,jpg,svg,webp}',
    '!dev/blocks/images/sprite/**/*']
  )
    .pipe(buffer())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe($.main.dest('dist/static/images/'))
};
