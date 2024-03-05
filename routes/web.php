<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\TourController;
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
    Route::get('/search', [TourController::class, 'searchPage']);
    Route::post('/search', [TourController::class, 'searchTour']);
});
Route::group(["prefix" => "booking"], function () {
    Route::get("/{tourId}", [BookingController::class, 'index'])->name("booking_index");
    // Route::post("/", [BookingController::class, 'booking'])->name("booking_tour");
});
