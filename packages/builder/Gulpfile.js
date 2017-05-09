const gulp = require('gulp');
const babel = require('gulp-babel');
const args = require('yargs').argv;
const chalk = require('chalk');
const through = require('through2');
const debug = require('gulp-debug');
const merge = require('merge-stream');

const sources = './src/**/*.?(js|jsx)';
const excludeTests = '!./src/**/*.test.?(js|jsx)';
const package = './package.json';
const dest = 'build';
const del = require('del');

gulp.task('default', ['clean'], () => {
    gulp.start(['build', 'copy-package']);
});

gulp.task('clean', () => {
  console.log(chalk.yellow('Cleaning previous builds'));
  return del([dest]);
});

gulp.task('build', () => {
    return gulp.src([ sources, excludeTests ])
        .pipe(debug())
        .pipe(through.obj( (file, enc, callback) => {
            const logFile = chalk.cyan(file.path);
            console.log(`Compiling ${logFile}...`);
            callback(null, file);
        }))
        .pipe(babel())
        .pipe(gulp.dest(dest));
});

gulp.task('copy-package', () => {
    return gulp.src(package)
      .pipe(debug())
      .pipe(through.obj( (file, enc, callback) => {
        const logFile = chalk.cyan(file.path);
        console.log(`Copying ${logFile}...`);
        callback(null, file);
      }))
      .pipe(gulp.dest(dest));
});
