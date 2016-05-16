// webpack.config.js

// webpack.config.js
module.exports = {
  entry: {
    IndexPage:'./js/IndexPage.js',
    PersonalCenter:'./js/PersonalCenter.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/built'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query:
        {
          presets:['react'],
          compact: false
        }
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader!jsx-loader?harmony',
        query:
        {
          presets:['react'],
          compact: false
        }
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};