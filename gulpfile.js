const gulp = require('gulp');
const sass = require('gulp-dart-sass');

// 单次编译scss文件至
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})

// 开发监听模式
gulp.task('default', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel(['sass']))
})

// scss功能测试编译
gulp.task('test:sass', function () {
  gulp.watch('demo/scss/demo.scss', function () {
    return gulp.src('demo/scss/demo.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('demo/scss/'))
  })
})