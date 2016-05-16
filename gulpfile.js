/**
 * Created by Administrator on 2016/5/9.
 */
var gulp = require('gulp'),
    watch = require("gulp-watch")
    shell = require('gulp-shell');
var uglify = require('gulp-uglify');


var path = {
  script: "js/**/*.js",
  css: "css/**/*.css",
}


gulp.task('compress', function () {
  return gulp.src("bundle.js").
         pipe(uglify())
        .pipe(gulp.dest('bundle.min.js'))
})

gulp.task('watch', function () {
  return gulp.src(path.script)
    .pipe(watch(path.script))
    .pipe(watch(path.css))
    .pipe(shell("webpack"));
})

gulp.task('default', function () {

  gulp.start('watch');
  gulp.start("compress");

});