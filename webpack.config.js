var glob = require('glob')
const path = require('path')


module.exports = {
    entry: 'src/index.js',
    output: {
      path: __dirname + '/lib',
      filename: 'heroprotocoldocs.js',
      libraryTarget: 'umd',
      library: 'heroprotocoldocs',
      umdNamedDefine: true
    }
  };