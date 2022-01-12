
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? $.main.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe($.main.dest('dist/static/js/'))
    : cb();
};
