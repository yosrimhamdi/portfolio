const { src, dest, series, task } = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpUsemin = require('gulp-usemin');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const rev = require('gulp-rev');

const { bundleJs } = require('./scripts');
const { compileStyles } = require('./styles');

const compressImages = () =>
  src('./app/assets/images/**/*.*')
    .pipe(imagemin())
    .pipe(dest('./dist/assets/images/'));

const usemin = () =>
  src('./app/index.html')
    .pipe(
      gulpUsemin({
        html: [htmlmin({ collapseWhitespace: true })],
        css: [rev(), cssnano()],
        js: [rev(), uglify()],
      }),
    )
    .pipe(dest('./dist/'));

const copyParticlesConfig = () =>
  src('./app/assets/particles.json').pipe(dest('./dist/assets'));

task(
  'build',
  series(bundleJs, compileStyles, compressImages, copyParticlesConfig, usemin),
);
