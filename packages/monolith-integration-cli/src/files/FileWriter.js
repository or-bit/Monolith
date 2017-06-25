const fs = require('fs');
const path = require('path');

/**
 * This module allows you to write on a file.
 * @module FileWriter
 * @type {{fileProperties, writeFile}}
 */
const FileWriter = (function iife() {
    /**
     * @member fileProperties {Object} Module props.
     * @type {{encoding: string}}
     */
    const fileProperties = {
        encoding: 'utf8',
    };

    /**
     * Write a file in the given path.
     * @function writeFile
     * @param filePath {string} Path for the file to be written
     * @param data {Object} Data to write
     * @param logger {Logger} Logger for tracing operations
     */
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
