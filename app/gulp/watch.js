const { watch, series, task, src, dest } = require('gulp');

const { reloadBrowser, injectStyles, createServer } = require('./server');
const { bundleJs } = require('./scripts');
const { compileStyles } = require('./styles');

const eye = () => {
  const options = { ignoreInitial: false };
  createServer('app');

  watch(['./app/*.html', './app/assets/particles.json'], reloadBrowser);

  watch('./app/assets/styles/**/*.css', options, series(compileStyles, injectStyles));

  watch('./app/assets/scripts/**/*.js', options, series(bundleJs, reloadBrowser));
};

task('watch', eye);
