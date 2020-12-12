const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const config = require('../../../webpack.config.js');

const bundle = () =>
  src('./app/assets/scripts/*.js')
    .pipe(webpack(config))
    .pipe(dest('./app/temp/scripts/bundled/'));

const toES5 = () =>
  src('./app/temp/scripts/bundled/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(dest('./app/temp/scripts/ECMAscript5/'));

module.exports = {
  bundle,
  toES5,
};
