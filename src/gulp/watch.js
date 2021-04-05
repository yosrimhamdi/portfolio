const { watch, series, task } = require('gulp');

const {
  reloadBrowser,
  injectStyles,
  createServer,
} = require('./modules/server');
const { bundleJs } = require('./modules/scripts');
const { compileStyles } = require('./modules/styles');

const eye = () => {
  watch('./src/*.html', reloadBrowser);

  watch(
    './src/assets/styles/**/*.css',
    { ignoreInitial: false },
    series(compileStyles, injectStyles),
  );

  watch(
    './src/assets/scripts/**/*.js',
    { ignoreInitial: false },
    series(bundleJs, reloadBrowser),
  );

  createServer('src');
};

task('watch', eye);
