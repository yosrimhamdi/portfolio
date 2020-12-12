const { watch, seires } = require('gulp');

const server = require('./server'),
  scripts = require('./scripts'),
  styles = require('./styles');

const eye = () => {
  server.createServer('app');

  watch(['./app/*.html', './app/assets/particles.json'], server.reloadBrowser);

  watch(
    './app/assets/styles/**/*.css',
    series(styles.compileStyles, server.injectStyles),
  );

  watch(
    './app/assets/scripts/**/*.js',
    series(scripts.bundle, scripts.es5, server.reloadBrowser),
  );
};

gulp.task('watch', eye);
