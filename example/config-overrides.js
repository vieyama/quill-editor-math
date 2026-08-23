const path = require('path')

module.exports = function override(config) {
  config.resolve = config.resolve || {}
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
  }
  config.resolve.plugins = (config.resolve.plugins || []).filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin'
  )

  return config
}
