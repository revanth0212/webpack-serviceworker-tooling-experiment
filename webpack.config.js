const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AddCowPlugin = require('./plugin/AddCowPlugin');

const filename = `main-${Math.random().toString(36).slice(2)}.js`;

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /sw\.js/,
      //   loader: './plugin/sw-loader.js'
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new AddCowPlugin(5),
      new CopyWebpackPlugin([
        {
          from: 'index.html',
          to: 'index.html',
          transform: content => {
            debugger;
            return Buffer.from(content.toString('utf8').replace('main.js', filename), 'utf8')
          }
        }
      ])
  ]
};