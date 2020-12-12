const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');
const config = require('../../webpack.config.js');

const bundle = done => {
  src('./app/assets/scripts/*.js')
    .pipe(webpack(config))
    .pipe(dest('./app/temp/scripts/bundled/'));

  done();
};

const toES5 = done => {
  src('./app/temp/scripts/bundled/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(dest('./app/temp/scripts/ECMAscript5/'));

  done();
};

module.exports = {
  bundle,
  toES5,
};
