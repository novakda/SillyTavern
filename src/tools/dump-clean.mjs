/**
 * Export all charcaters as JSON data and PNG images without metadata.
 */

// Get all PNGS (we assume those are all the characters )


import fs from 'fs/promises';
import path from 'path';

const CHAR_PATH = './public/characters'

const getAllCharacterFiles = async (directoryPath) => {
    try {
      const files = await fs.readdir(directoryPath);

      const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

        return pngFiles
    //   console.log(`PNG Files in ${directoryPath}:`);
    //   pngFiles.forEach(async (pngFile) => {
    //       const fullPath = path.join(directoryPath, pngFile);
    //       console.log(`- ${fullPath}`);
    //       const data = await parse(fullPath)
    //       const json = JSON.parse(data)
    //       console.log(json.name)
    //       const result = await charaWrite(fullPath, '', fullPath)
    //   //   console.log(data)
    //   });
    } catch (err) {
      console.error('Error reading directory:', err);
    }
  };

const result = await getAllCharacterFiles(CHAR_PATH);
console.log(result)
