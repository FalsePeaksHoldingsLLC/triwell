var gulp = require('gulp')
var fs   = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})

gulp.task('compile', ['css', 'js-post', 'js-pre', 'html', 'templates'])
gulp.task('compress', ['img'])