<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/requestVerificationCode', [AuthController::class, "requestVerificationCode"]);

Route::post('/confirmVerificationCode', [AuthController::class, "confirmVerificationCode"]);
