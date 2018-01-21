var gulp = require('gulp');
var concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
    return gulp.src(["bin/*", "content/*"])
        .pipe(concat("index.html"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("site_build/"));
})