var gulp = require('gulp');
var concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
    return gulp.src(["bin/top.html", "bin/nav.html", "content/*", "bin/bottom.html"])
        .pipe(concat("index.html"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("docs"));
})

gulp.task('templates', function () {
    return gulp.src(["templates/*"])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("docs/templates"));
})