const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'componentLib',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [
    {react: 'commonjs2 react',
    'react/jsx-runtime': 'commonjs react',
    'prop-types': 'commonjs2 prop-types'},
    function({}, callback) {
      callback(null, ['@material-ui/core/TextField', 'TextField'], 'commonjs');
    },
    function({}, callback) {
      callback(null, ['@material-ui/core/styles', 'makeStyles'], 'commonjs');
    },
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
            presets: [['@babel/preset-env', { targets: { esmodules: true } }],
              ['@babel/preset-react', { runtime: 'automatic' }]]
          }
        }
      }
    ]
  }
}