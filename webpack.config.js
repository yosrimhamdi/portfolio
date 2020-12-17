module.exports = {
  entry: {
    App: './app/assets/scripts/App.js',
    Vendor: './app/assets/scripts/Vendor.js',
  },
  output: {
    filename: '[name].js',
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
