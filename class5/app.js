const path = require('path')
const write = require('./modules/write')
const read = require('./modules/read')

const directoryFile = path.resolve(__dirname, 'new.json')

// const people = [
//   { name: 'Cleberson' },
//   { name: 'Eilson' },
//   { name: 'Jurandir' },
//   { name: 'Claudinho' },
// ]

// const json = JSON.stringify(people, '', 2)

// write(directoryFile, json)

async function readFile(directory) {
  const data = await read(directory)
  renderData(data)
}

function renderData(data) {
  newData = JSON.parse(data)
  newData.forEach(val => console.log(val.name))
}

readFile(directoryFile)