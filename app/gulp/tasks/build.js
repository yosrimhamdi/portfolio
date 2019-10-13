const gulp  = require('gulp'),
      clean = require('gulp-clean'),
      imagemin = require('gulp-imagemin'),
      gulpUsemin = require('gulp-usemin'),
      cssnano = require('gulp-cssnano'),
      uglify = require('gulp-uglify'),
      rev = require('gulp-rev'),
      scripts = require('./scripts'),
      styles = require('./styles'),
      server = require('./server');

const deleteDist = () => {
  return gulp.src('./dist', {read: false, allowEmpty: true})
             .pipe(clean());
};
const compressImages = () => {
  return gulp.src('./app/assets/images/**/*.*')
             .pipe(imagemin())
             .pipe(gulp.dest('./dist/assets/images/'));
};
const usemin = () => {
  return gulp.src('./app/index.html')
             .pipe(gulpUsemin({
               css:[() => rev(), () => cssnano()],
               js:[() => rev(), () => uglify()]
             }))
             .pipe(gulp.dest('./dist/'));
};
const copyFolders = () => {
  const paths = [
    './app/**/*.*',
    '!./app/assets/',
    '!./app/assets/**/*.*',
    '!./app/temp/',
    '!./app/temp/**/*.*',
    '!./app/gulp/',
    '!./app/gulp/**/*.*',
    '!./app/index.html'
  ];
  return gulp.src(paths)
             .pipe(gulp.dest('./dist/'));
};
gulp.task('build', gulp.series(scripts.bundle, scripts.es5, styles.compileStyles ,deleteDist, compressImages, copyFolders, usemin, server.createServer.bind(this,'dist')));