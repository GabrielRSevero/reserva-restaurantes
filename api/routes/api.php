<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UserController;

Route::post("/requestVerificationCode", [AuthController::class, "requestVerificationCode"]);

Route::post("/confirmVerificationCode", [AuthController::class, "confirmVerificationCode"]);

Route::post("/users/{id}", [UserController::class, "update"]);

Route::post("/reservations", [ReservationController::class, "create"]);

Route::get("/reservations", [ReservationController::class, "get"]);
