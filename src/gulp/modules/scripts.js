const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const config = require('../../../webpack.config.js');

const bundleJs = () =>
  src('./src/assets/scripts/*.js')
    .pipe(webpack(config))
    .pipe(dest('./src/temp/scripts/'));

module.exports = {
  bundleJs,
};
