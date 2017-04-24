const webpack = require('webpack');
var config = {
   devtool: 'cheap-module-source-map',
   entry: './app/index.jsx',

   output: {
      path:'./dist/',
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8012,
      protocol: 'http:'
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-decorators-legacy', 'transform-object-assign']
            }
         }
      ]
   },

  // Node environment
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
}

module.exports = config;