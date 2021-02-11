/* eslint-disable no-undef */
'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
const jsdoc = require('gulp-jsdoc3');

const {src} = require('gulp');
const eslint = require('gulp-eslint');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series(['sass'], function () {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./css/*.scss", gulp.series(['sass']));
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./JS/*.js").on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', gulp.series());
}));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("./css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task('doc', function (cb) {
  gulp.src(['./JS/*.js'], {read: false})
      .pipe(jsdoc(cb));
});

gulp.task('lint', () => {
  return src(['./JS/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('default', gulp.series(['serve','doc','lint']));