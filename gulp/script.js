var gulp   = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js-post', function () {
  return gulp.src(["ng/app.js", "ng/route.js", "js/materialize.js"])
    .pipe(concat("post-scripts.min.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest("site_build"))
})

gulp.task('js-pre', function () {
  return gulp.src(["js/angular.js","js/angular-routes.js"])
    .pipe(concat("pre-scripts.min.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest("site_build"))
})