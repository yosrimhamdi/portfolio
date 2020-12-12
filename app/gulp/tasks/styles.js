const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const imports = require('postcss-import');
const mixins = require('postcss-mixins');
const variables = require('postcss-simple-vars');
const nested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const hexrgba = require('postcss-hexrgba');

const compileStyles = () =>
  src('./app/assets/styles/styles.css')
    .pipe(postcss([imports, mixins, autoprefixer, nested, variables, hexrgba]))
    .pipe(dest('./app/temp/styles/'));

module.exports = {
  compileStyles,
};
