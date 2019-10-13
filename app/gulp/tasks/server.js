const gulp = require('gulp'),
      browserSync = require('browser-sync').create();
      
const createServer = baseDir => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: baseDir
    }
  });
};

const injectStyles = () => {
  return gulp.src('./app/temp/styles/styles.css')
             .pipe(browserSync.stream());
}; 

module.exports = {
  injectStyles,
  createServer,
  reloadBrowser: browserSync.reload
}