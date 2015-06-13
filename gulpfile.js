'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

//scripts task
gulp.task('scripts', function(){
	gulp.src('src/js/*.js') //source directory
	.pipe(uglify()) // we uglify the files in the source directory
	.pipe(gulp.dest('app/js/*.js')); // destination directory	
});

//styles task
gulp.task('styles', function () {
  gulp.src('./src/scss/main.scss') //source directory
    .pipe(sass().on('error', sass.logError)) // we sassify the files in the source directory and handle the errors respectively
    .pipe(gulp.dest('app/assets/css')); //destination directory
});

//images task
gulp.task('images', function () {
    return gulp.src('app/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/assets/img'));
});

//watch task
gulp.task('watch', function(){
	gulp.watch('src/scss/*', ['styles']);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('app/assets/img/**', ['images']);
});


//default task: calls everything else 
gulp.task('default', ['scripts', 'styles', 'images', 'watch']);
