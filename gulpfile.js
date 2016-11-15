var gulp = require('gulp')
var browserify = require('gulp-browserify')
var notify = require("gulp-notify")
var livereload = require('gulp-livereload')
var eslint = require('gulp-eslint')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')

gulp.task('js', function () {
  gulp.src('./src/js/*.js')
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload())
    .pipe(notify('task "js" completed'))
})

gulp.task('eslint', function () {
  gulp.src('./src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(notify('task "eslint" completed'))
})

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload())
    .pipe(notify('task "sass" completed'))
})

gulp.task('watch', function () {
  livereload.listen()
  gulp.watch('./src/sass/*.scss', ['sass'])
  gulp.watch('./src/js/*.js', ['js', 'eslint'])
})

gulp.task('default', ['js', 'eslint', 'sass', 'watch'])
