module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.bundle.js",
    path: "./"
  },
  module: {
    loaders: [
      {test: /.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};
