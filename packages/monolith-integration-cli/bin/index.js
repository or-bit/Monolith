#!/usr/bin/env node
const execFile = require('child_process').execFile;
const path = require('path');

const path = '../index.js';
const crossPlatformPath = path.resolve(path);

return execFile('node', [crossPlatformPath], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    if (stderr) {
        console.error(stderr);
    }
    console.log(stdout);
});
