(function () {
  'use strict';

  var gulp = require('gulp');
  var sass = require('gulp-dart-sass');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del'],
  });

  //styles
  gulp.task('docs', function () {
    return gulp
      .src('docs/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('docs'));
  });
})();
