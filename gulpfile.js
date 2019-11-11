// 'use strict';
//
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync');
// var autoprefixer = require('gulp-autoprefixer');
//
// // var concat = require('gulp-concat');
// // var uglify = require('gulp-uglifyjs');
//
//
// //sass
//
// gulp.task('sass', function () {
//     return gulp.src('./app/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./app/css'))
//         .pipe(browserSync.reload({ stream: true }))
// });
//
// //browser-sync
// gulp.task('browser-sync', function () {
//     browserSync({
//         server: {
//             baseDir: 'app'
//         },
//         notify: false
//     });
// });
//
// //autoprefix
//
// gulp.task('autoprefixer', function () {
//     return gulp.src('./app/scss/**/*.scss')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./app/css'))
// });
//
// // gulp.task('scripts', function () {
// //     return gulp.src([
// //         'app/libs/jquery/jquery.min.js',
// //         'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
// //     ])
// //         .pipe(concat(libs.min.js))
// //         .pipe(uglify())
// //         .pipe(gulp.dest('app/js'))
// // });
//
// gulp.task('build', ['sass', 'browser-sync', 'autoprefixer']);
//
//
// gulp.task('watch', ['browser-sync', 'sass', 'autoprefixer'], function () {
//     // gulp.start('build');
//     gulp.watch('./app/scss/**/*.scss', ['sass']);
//     gulp.watch('./app/*.html', browserSync.reload);
//     gulp.watch('./app/js/**/*.js', browserSync.reload);
// });
//
//

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

// var concat = require('gulp-concat');
// var uglify = require('gulp-uglifyjs');


gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('default', () =>
    gulp.src('./app/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('build', ['sass', 'browser-sync']);

gulp.task('watch', ['browser-sync', 'sass'], function () {
    // gulp.start('build');
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/*.html', browserSync.reload);
    gulp.watch('./app/js/**/*.js', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync({
        server:{
            baseDir:'app'
        },
        notify:false
    });
});

// gulp.task('scripts', function () {
//     return gulp.src([
//         'app/libs/jquery/jquery.min.js',
//         'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
//     ])
//         .pipe(concat(libs.min.js))
//         .pipe(uglify())
//         .pipe(gulp.dest('app/js'))
// });