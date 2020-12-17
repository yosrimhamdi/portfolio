const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const config = require('../../webpack.config.js');

const bundleJs = () =>
  src('./app/assets/scripts/*.js')
    .pipe(webpack(config))
    .pipe(dest('./app/temp/scripts/'));

module.exports = {
  bundleJs,
};
