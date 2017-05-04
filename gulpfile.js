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

var elixir = require('laravel-elixir');
elixir(function (mix) {
    mix.styles([
        'font-awesome/font-awesome-4.7.0/css/font-awesome.css',
        'libs/select2.min.css',
        'app.css',
        'styles.css',
        'lity.css',
        // 'font-awesome/font-awesome-4.7.0/css/font-awesome.min.css',

        'bootstrap-datepicker/bootstrap-datepicker.css',
        'bootstrap-datepicker/bootstrap-datepicker.standalone.css',
        'bootstrap-datepicker/bootstrap-datepicker3.css',
        'bootstrap-datepicker/bootstrap-datepicker3.standalone.css',
    ]);
    mix.scripts([
        // 'jquery_3.1.1.js',
        'app.js',
        'custom.js',
        'lity.js',
        'libs/select2.min.js',
        'bootstrap-datepicker/bootstrap-datepicker.js'
    ]);
    mix.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap/','public/css/fonts');

});