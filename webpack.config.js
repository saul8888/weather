const path = require('path');

module.exports = {
    //index: ['babel-polyfill', './src/index.js'],
  entry: './src/index.js',
  output: {
    filename: '[name]-wp.js',
    path: path.resolve(__dirname, 'public/script')
  },
  
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }]
  },
  
  devServer: {
    port: 5000
  }
};
