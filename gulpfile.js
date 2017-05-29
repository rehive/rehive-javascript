var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

gulp.task('default', function() {
    return gulp.src(['./promisePolyfill.js','./fetch.js','./rehiveSDK.js'])
        .pipe(concat('rehiveSdk.min.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('build'));
});