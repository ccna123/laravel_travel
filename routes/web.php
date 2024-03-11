<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\TourManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get("/", function () {
    return redirect("tours");
});
Route::group(["prefix" => "tours"], function () {
    Route::get('/', [TourController::class, 'index'])->name("tours");
    Route::get('/test', [TourController::class, 'test']);
    Route::get('/search', [TourController::class, 'searchPage']);
    Route::post('/search', [TourController::class, 'searchTour']);
});

Route::get("/login", [AuthController::class, 'index']);
Route::post("/login", [AuthController::class, 'login']);

Route::resource('admin', AdminController::class);


Route::group(["prefix" => "booking"], function () {
    Route::get("/{tourId}", [BookingController::class, 'index'])->name("booking_index");
    Route::post("/", [BookingController::class, 'booking'])->name("booking_tour");
});
