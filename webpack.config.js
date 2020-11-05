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
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react'
    },
    'react/jsx-runtime': {
      commonjs: 'react',
      commonjs2: 'react'
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types'
    },
    // '@material-ui/core': {
    //   commonjs: '@material-ui/core',
    //   commonjs2: '@material-ui/core'
    // },
    '@material-ui/core/styles': {
      commonjs: '@material-ui/core',
      commonjs2: '@material-ui/core'
    },
    '@material-ui/core/TextField': {
      commonjs: '@material-ui/core',
      commonjs2: '@material-ui/core' 
    }
  },
  // externals: {
  //   react: 'commonjs2 react',
  //   'react/jsx-runtime': 'commonjs react',
  //   'prop-types': 'commonjs2 prop-types'
  // },
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