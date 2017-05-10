// gulp related dependencies
const gulp = require('gulp');
const babel = require('gulp-babel');
const debug = require('gulp-debug');

// utils
const chalk = require('chalk');
const through = require('through2');
const merge = require('merge-stream');
const del = require('del');

// consts and globs
const sources = './src/**/*.?(js|jsx)';
const index = './index.js';
const excludeTests = '!./src/**/*.test.?(js|jsx)';
const dest = 'build';

gulp.task('default', ['clean'], () => {
    gulp.start(['build']);
});

gulp.task('clean', () => {
  console.log(chalk.yellow('Cleaning previous builds'));
  return del([dest]);
});

gulp.task('build', () => {
    const jsStreams = gulp.src([ sources, excludeTests ], { base: '.' })
        .pipe(debug())
        .pipe(through.obj( (file, enc, callback) => {
            const logFile = chalk.cyan(file.path);
            console.log(`Compiling ${logFile}...`);
            callback(null, file);
        }))
        .pipe(babel())
        .pipe(gulp.dest(dest));

    const indexStream = gulp.src([ index ], { base: '.' })
      .pipe(debug())
      .pipe(through.obj( (file, enc, callback) => {
        const logFile = chalk.cyan(file.path);
        console.log(`Compiling ${logFile}...`);
        callback(null, file);
      }))
      .pipe(babel())
      .pipe(gulp.dest(dest));

    return merge(jsStreams, indexStream);
});

gulp.task('build:watch', ['build'], () => {
  gulp.watch([sources, index], ['build']);
});

