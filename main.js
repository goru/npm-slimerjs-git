var path = require('path')

try {
  exports.path = path.resolve(__dirname, 'slimerjs/src/slimerjs')
} catch(e) {
  exports.path = null
}
