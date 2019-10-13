const gulp  = require('gulp'),
      watch = require('gulp-watch');

const server = require('./server'),
      scripts = require('./scripts'),
      styles = require('./styles');

const eye = () => {

  server.createServer('app');
  
  watch('./app/*.html', server.reloadBrowser);
  watch('./app/assets/styles/**/*.css', gulp.series(styles.compileStyles, server.injectStyles));
  watch('./app/assets/scripts/**/*.js', gulp.series(scripts.bundle, scripts.es5, server.reloadBrowser));
  watch('./app/particles/particles.json', server.reloadBrowser);
};

gulp.task('watch', eye);