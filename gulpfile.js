// /**
//  * Created by eduardolariu on 06/04/2017.
//  */
// var elixir= require('laravel-elixir');
// var gulp = require('gulp');
// var minifycss = require('gulp-minify-css');
// var autoprefixer = require('gulp-autoprefixer');
// var notify = require('gulp-notify');
// var sass = require('gulp-ruby-sass');
// var concatCss = require('gulp-concat-css');
//
// gulp.task('css',function(){
//     return sass('public/sass/main.sass',{style:'compressed'})
//         .on('error', sass.logError)
//         // .pipe(gulp.dest('public/css2/'));
//         .pipe(concatCss('public/sass/app.css'))
//         .pipe(concatCss('public/sass/styles.css'))
//
//         .pipe(autoprefixer('last 15 version'))
//         // .pipe(minifycss())
//
//         .pipe(gulp.dest('public/css2/'))
//         .pipe(notify({message: 'All done, master'}));
// });
//
// gulp.task('default',function(){
//     gulp.run('css');
//     gulp.watch('public/sass/**/*.sass',function(){
//         gulp.run('css');
//     });
// })
// //
// // elixir(function(mix) {
// //     mix.less("app.less");
// // });

