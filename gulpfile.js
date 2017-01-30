var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');
var banner = ["/*! Copyright Twitter Inc., noraworld, and other contributors. Licensed under MIT */\n"];

gulp.task('js', function() {
  gulp.src('./twemoji.js')
      .pipe(uglify())
      .pipe(header(banner))
      .pipe(rename('./iemoji.js'))
      .pipe(gulp.dest('./docs'));
});

gulp.task('default', ['js']);
