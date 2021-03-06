const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {
  // Генерируем спрайт
  const spriteData = $.main.src('dev/blocks/images/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../images/sprite/sprite.png',
    cssName: 'sprite.scss',
    padding: 5,
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  // Оптимизируем спрайт
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe($.main.dest('dist/static/images/sprite/'));

  // Собираем SCSS
  const cssStream = spriteData.css
    .pipe($.main.dest('dev/blocks/styles/utilits/'));

  return merge(imgStream, cssStream);
};


