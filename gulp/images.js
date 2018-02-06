var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('img', function(){
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest("docs/images"))
})