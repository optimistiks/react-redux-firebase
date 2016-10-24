module.exports = {
  entry: {
    javascript: [
      'babel-polyfill',
      './index.jsx',
    ],
    html: './index.html',
  },
  output: {
    path: './build/',
    filename: 'build.js',
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
    loaders: [
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  eslint: {
    configFile: './.eslintrc',
    failOnWarning: false,
    failOnError: true,
  },
};
