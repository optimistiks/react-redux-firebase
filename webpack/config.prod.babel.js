import webpack from 'webpack';
import config from './config.babel';

export default {
  ...config,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
