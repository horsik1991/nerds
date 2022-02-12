
// Копируем все шрифты из папки dev в dist

module.exports = function fonts() {
  return $.main.src('dev/static/fonts/*.*')
    .pipe($.main.dest('dist/static/fonts'))
};
