<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CustomerController as AdminCustomerController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CustomerController;
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

//customer
Route::get('/customers', [AdminCustomerController::class, 'index'])->name('customers.index');
Route::get('/customers/create', [AdminCustomerController::class, "create"])->name('customers.create');
Route::post('/customers/store', [AdminCustomerController::class, "store"])->name('customers.store');
Route::get('/customers/edit/{id}', [AdminCustomerController::class, "edit"])->name('customers.edit');
Route::post('/customers/update/{id}', [AdminCustomerController::class, "update"])->name('customers.update');
Route::post('/customers/delete/{id}', [AdminCustomerController::class, "destory"])->name('customers.delete');

}); 

});