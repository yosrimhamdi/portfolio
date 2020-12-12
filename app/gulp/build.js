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

const copyParticlesConfig = () =>
  src('./app/assets/particles.json').pipe(dest('./dist/assets'));

task(
  'build',
  series(
    bundleJs,
    toES5,
    compileStyles,
    deleteDist,
    compressImages,
    copyParticlesConfig,
    usemin,
    createServer.bind(this, 'dist'),
  ),
);
