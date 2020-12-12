const { src } = require('gulp');
const { init, stream, reload } = require('browser-sync').create();

const createServer = baseDir => {
  init({
    notify: false,
    server: {
      baseDir: baseDir,
    },
  });

  return null;
};

const injectStyles = done => {
  src('./app/temp/styles/styles.css').pipe(stream());

  done();
};

const reloadBrowser = done => {
  reload();

  done();
};

module.exports = {
  injectStyles,
  createServer,
  reloadBrowser,
};
