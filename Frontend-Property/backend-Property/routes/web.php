<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//Admin Login Route

//dashboard Route

Route::group(['prefix'=>'admin'],function(){
    Route::group(['middleware'=>'admin.guest'],function(){
//login Route
        Route::get('/login',[AdminController::class,'login'])->name('admin.login');
        Route::post('/authenticate',[AdminController::class,'authenticate'])->name('admin.authenticate');
        
    });
    Route::group(['middleware'=>'admin.auth'],function(){
//dashboard Route
        Route::get('/dashboard',[AdminController::class,'create'])->name('admin.dashboard');
        Route::get('/logout',[AdminController::class,'logout'])->name('dashboard.logout');


//users

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [UserController::class, "create"])->name('users.create');
Route::post('/users/store', [UserController::class, "store"])->name('users.store');
Route::get('/users/edit/{id}', [UserController::class, "edit"])->name('users.edit');
Route::post('/users/update/{id}', [UserController::class, "update"])->name('users.update');
Route::post('/users/delete/{id}', [UserController::class, "destory"])->name('users.delete');

}); 

});