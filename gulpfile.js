// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var clean = require('gulp-clean');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
    gulp.src('app/font/**/*.{ttf,woff,eot,svg}')
        .pipe(gulp.dest('dist/font/'));

    gulp.src('app/img/**/*.{png,jpg,gif}')
        .pipe(gulp.dest('dist/img/'));

    gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js/'));

    gulp.src('app/composer.json')
        .pipe(gulp.dest('dist/'));

    gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist/'));

    gulp.src('app/ajax/**/*.json')
        .pipe(gulp.dest('dist/ajax/'));
});

gulp.task('scripts', function() {
    gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js/'));

    gulp.src('app/ajax/**/*.json')
        .pipe(gulp.dest('dist/ajax/'));
});

gulp.task('html', function() {
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('destroy', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch('app/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', ['html']);
    gulp.watch('dist/**/*.{html,css,png,jpg,gif,js,json}').on('change', livereload.changed);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'copy', 'watch']);

// Clean Task
gulp.task('clean', ['destroy']);



