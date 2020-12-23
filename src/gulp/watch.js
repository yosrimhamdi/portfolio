const { watch, series, task } = require('gulp');

const { reloadBrowser, injectStyles, createServer } = require('./server');
const { bundleJs } = require('./scripts');
const { compileStyles } = require('./styles');

const eye = () => {
  const options = { ignoreInitial: false };
  createServer('src');

  watch('./src/*.html', reloadBrowser);

  watch(
    './src/assets/styles/**/*.css',
    options,
    series(compileStyles, injectStyles),
  );

  watch(
    './src/assets/scripts/**/*.js',
    options,
    series(bundleJs, reloadBrowser),
  );
};

task('watch', eye);
