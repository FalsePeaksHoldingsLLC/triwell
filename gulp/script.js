var gulp   = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js-post', function () {
  return gulp.src(["ng/*"])
    .pipe(concat("post-scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("site_build"))
})

gulp.task('js-pre', function () {
  return gulp.src(["js/*"])
    .pipe(concat("pre-scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("site_build"))
})