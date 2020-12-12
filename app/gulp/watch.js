const { watch, series, task } = require('gulp');

const { reloadBrowser, injectStyles, createServer } = require('./server');
const { bundleJs, toES5 } = require('./scripts');
const { compileStyles } = require('./styles');

const eye = () => {
  createServer('app');

  watch(['./app/*.html', './app/assets/particles.json'], reloadBrowser);

  watch('./app/assets/styles/**/*.css', series(compileStyles, injectStyles));

  watch('./app/assets/scripts/**/*.js', series(bundleJs, toES5, reloadBrowser));
};

task('watch', eye);
