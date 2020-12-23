const { src } = require('gulp');
const { init, stream, reload } = require('browser-sync').create();

const createServer = baseDir => {
  init({
    notify: false,
    server: {
      baseDir: baseDir,
    },
    ghostMode: false,
  });
};

const injectStyles = () => src('./src/temp/styles/styles.css').pipe(stream());

const reloadBrowser = done => {
  reload();

  done();
};

module.exports = {
  injectStyles,
  createServer,
  reloadBrowser,
};
