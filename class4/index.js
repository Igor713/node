const fs = require('fs').promises;  // Use fs.promises para acessar as versões assíncronas das funções do módulo fs
const path = require('path');

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  try {
    const files = await fs.readdir(rootDir);
    await walk(files, rootDir);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    try {
      const stats = await fs.stat(fileFullPath);

      if (stats.isDirectory()) {
        await readdir(fileFullPath);
        continue;
      }

      console.log(file, stats.isDirectory());
    } catch (error) {
      console.error('Error processing file:', file, error);
    }
  }
}

// Chame a função readdir
readdir('class4').catch(error => console.error(error));
