/**
 * Created by ashleigh.henry on 15/06/2016.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var paths = {
    scss:'./scss/*.scss'
};

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"],{
        server: {
            baseDir: "./"
        }
    });
});

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', ['sass','browser-sync'], function(){

    gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass'])
    gulp.watch(['*.html'], ['bs-reload']);
});
