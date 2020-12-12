const { src, dest, series, task } = require('gulp');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const gulpUsemin = require('gulp-usemin');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');

const { bundleJs, toES5 } = require('./scripts');
const { compileStyles } = require('./styles');
const { createServer } = require('./server');

const deleteDist = () =>
  src('./dist', { read: false, allowEmpty: true }).pipe(clean());

const compressImages = () =>
  src('./app/assets/images/**/*.*')
    .pipe(imagemin())
    .pipe(dest('./dist/assets/images/'));

const usemin = () =>
  src('./app/index.html')
    .pipe(
      gulpUsemin({
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()],
      }),
    )
    .pipe(dest('./dist/'));

const copyFolders = () => {
  const paths = [
    './app/**/*.*',
    '!./app/assets/',
    '!./app/assets/**/*.*',
    '!./app/temp/',
    '!./app/temp/**/*.*',
    '!./app/gulp/',
    '!./app/gulp/**/*.*',
    '!./app/index.html',
  ];

  return src(paths).pipe(dest('./dist/'));
};

task(
  'build',
  series(
    bundleJs,
    toES5,
    compileStyles,
    deleteDist,
    compressImages,
    copyFolders,
    usemin,
    createServer.bind(this, 'dist'),
  ),
);
