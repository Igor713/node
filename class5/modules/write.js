const fs = require('fs').promises

module.exports = (directory, data) => {
  fs.writeFile(directory, data, { flag: 'w', encoding: 'utf8' })
}
