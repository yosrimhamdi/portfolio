const { watch, series, task } = require('gulp');

const { reloadBrowser, injectStyles, createServer } = require('./server');
const { bundleJs } = require('./scripts');
const { compileStyles } = require('./styles');

const eye = () => {
  createServer('src');

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
};

task('watch', eye);
