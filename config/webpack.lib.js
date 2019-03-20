const paths = require('./paths')
const origin = require('./webpack.config')('production')

//plugins that we want to use
const pluginType = ['ModuleNotFoundPlugin', 'DefinePlugin',
  'MiniCssExtractPlugin', 'IgnorePlugin', 'ForkTsCheckerWebpackPlugin']

let newPlugin = origin.plugins
  .filter((value) => pluginType.includes(value.constructor.name))
//console.log('new plugin is:',newPlugin)

const libConfig = {
  output: {
    path: paths.appBuild,
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  //for library,react and react-dom should added to externals
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  plugins: newPlugin
}
const config = Object.assign(origin, libConfig)

//disable chunks
delete config.optimization.splitChunks
delete config.optimization.runtimeChunk

//disable html here
delete config.plugins

module.exports = config;