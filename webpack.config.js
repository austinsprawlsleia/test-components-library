const path = require('path')

module.exports = {
  // mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'componentLib',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    react: 'commonjs2 react',
    'react/jsx-runtime': 'commonjs react',
    'prop-types': 'commonjs2 PropTypes',
    '@material-ui/core/styles': 'commonjs makeStyles',
    '@material-ui/core/TextField': 'commonjs2 TextField'
  },
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