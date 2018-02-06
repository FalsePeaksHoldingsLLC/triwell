var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat')

gulp.task('css', function(){
    return gulp.src(["style/*"])
        .pipe(concat("style.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest(""));
})