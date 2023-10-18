const fs = require('fs')
const path = require('path')

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir()
}