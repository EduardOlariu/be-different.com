<?php


/**
 * Model bindings
 */
Route::model('motivationalVideo',\App\MotivationalVideo::class);

/**
 * Route bindings
 */
Route::bind('motivationalVideo',function($value,$route){
   return \App\MotivationalVideo::whereSlug($value)->first();
});



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});




Route::group(['prefix' => 'user'], function () {


    Route::get('/', 'User\PageController@index');
    Route::get('/home', 'User\PageController@index');
    Route::get('/dashboard', 'User\PageController@index');
	Route::group(['prefix' => 'events'], function () {
		
		Route::get('/', 'EventsController@index');
		Route::get('/{event}', 'EventsController@show');
	});

    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', 'User\ProfileController@index');

        Route::get('/choose_type', 'User\ProfileController@choose_type');


        Route::post('/test_image', 'User\ProfileController@upload_image');
        Route::get('/test_image', 'User\ProfileController@test_image');

        Route::post('/person', 'User\ProfileController@create_person');
        Route::post('/business', 'User\ProfileController@create_business');
        Route::post('/world', 'User\ProfileController@create_world');
        Route::get('/edit', 'User\ProfileController@edit');
        Route::get('/reset', 'User\ProfileController@reset');
        Route::post('/edit', 'User\ProfileController@store_edit');





        Route::group(['prefix' => 'page'], function () {
//            Route::get('/', 'User\ProfileController@page_index');
            Route::get('/edit','User\ProfileController@edit_page');
            Route::patch('/edit','User\ProfileController@upload_profile_picture');
            Route::post('/edit','User\ProfileController@store_edit_page');
        });



    });


    Route::get('/login', 'UserAuth\LoginController@showLoginForm');
    Route::post('/login', 'UserAuth\LoginController@login');
    Route::post('/logout', 'UserAuth\LoginController@logout');
    Route::get('/logout', 'UserAuth\LoginController@logout');

    Route::get('/register', 'UserAuth\RegisterController@showRegistrationForm');
    Route::post('/register', 'UserAuth\RegisterController@register');

    Route::post('/password/email', 'UserAuth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('/password/reset', 'UserAuth\ResetPasswordController@reset');
    Route::get('/password/reset', 'UserAuth\ForgotPasswordController@showLinkRequestForm');
    Route::get('/password/reset/{token}', 'UserAuth\ResetPasswordController@showResetForm');


});

Route::group(['prefix' => 'admin'], function () {


    /**
     * Motivational Video part
     */
    Route::group(['prefix' => 'motivational-videos'], function(){
        Route::get('/','Admin\MotivationalVideoController@index');
        Route::get('/index','Admin\MotivationalVideoController@index');
        Route::get('/{motivationalVideo}','Admin\MotivationalVideoController@show');
        Route::get('/{motivationalVideo}/edit','Admin\MotivationalVideoController@edit');
        Route::post('/{motivationalVideo}/edit','Admin\MotivationalVideoController@store');
        Route::post('/{motivationalVideo}/delete','Admin\MotivationalVideoController@delete');
    });


    /**
     * Page part
     */
    Route::get('/', 'Admin\PageController@index');
    Route::get('/dashboard', 'Admin\PageController@index');

    /**
     * Login part
     */

    Route::get('/login', 'AdminAuth\LoginController@showLoginForm');
    Route::post('/login', 'AdminAuth\LoginController@login');
    Route::post('/logout', 'AdminAuth\LoginController@logout');

    Route::get('/register', 'AdminAuth\RegisterController@showRegistrationForm');
    Route::post('/register', 'AdminAuth\RegisterController@register');

    Route::post('/password/email', 'AdminAuth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('/password/reset', 'AdminAuth\ResetPasswordController@reset');
    Route::get('/password/reset', 'AdminAuth\ForgotPasswordController@showLinkRequestForm');
    Route::get('/password/reset/{token}', 'AdminAuth\ResetPasswordController@showResetForm');
});
