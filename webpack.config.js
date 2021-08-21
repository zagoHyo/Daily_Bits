const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public_html/js'),
    filename: 'app.js'
  },
  entry: {
    main: './src/index.js'
  }
}

module.exports = {
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader" 
        }
      ]
    }
  }