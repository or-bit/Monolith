const fs = require('fs');
const path = require('path');

const FileWriter = (function iife() {
    const fileProperties = {
        encoding: 'utf8',
    };

    const writeFile = (filePath, data, logger) => (
      new Promise((resolve, reject) => {
          fs.writeFile(filePath, data, fileProperties, (error) => {
              if (error) {
                  reject(error);
              } else {
                  logger(`File written successfully at: ${
                      path.resolve(filePath)
                  }`);
                  resolve();
              }
          });
      })
    );

    return {
        fileProperties,
        writeFile,
    };
}());

module.exports = FileWriter;
