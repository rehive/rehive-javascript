var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

gulp.task('scripts', function() {
    return gulp.src(['./promisePolyfill.js','./fetch.js','./index.js'])
        .pipe(concat('rehive.min.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['scripts']);