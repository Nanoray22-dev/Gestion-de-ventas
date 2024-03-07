<?php

use App\Http\Controllers\GananciasController;
use App\Http\Controllers\GastosController;
use App\Http\Controllers\IngresosController;
use App\Http\Controllers\reporteUsuariosController;
use App\Http\Controllers\usuariosController;
use App\Http\Controllers\VentasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [usuariosController::class, 'index']);
Route::get('/users/{id}', [usuariosController::class, 'show']);
Route::post('/users', [usuariosController::class, 'store']);
Route::put('/users/{id}', [usuariosController::class, 'update']);
Route::delete('/users/{id}', [usuariosController::class, 'destroy']);

Route::get('/gastos', [GastosController::class, 'index']);
Route::get('/gastos/{id}', [GastosController::class, 'show']);
Route::post('/gastos', [GastosController::class, 'store']);
Route::put('/gastos/{id}', [GastosController::class, 'update']);
Route::delete('/gastos/{id}', [GastosController::class, 'destroy']);

Route::get('/ingresos', [IngresosController::class, 'index']);
Route::get('/ingresos/{id}', [IngresosController::class, 'show']);
Route::post('/ingresos', [IngresosController::class, 'index']);
Route::put('/ingresos/{id}', [IngresosController::class, 'update']);
Route::delete('/ingresos/{id}', [IngresosController::class, 'destroy']);

Route::get('/ganancias', [GananciasController::class, 'getIngresos']);
Route::get('/ganancias/{id}', [GananciasController::class, 'show']);
Route::post('/ganancias', [GananciasController::class, 'store']);
Route::put('/ganancias/{id}', [GananciasController::class, 'update']);
Route::delete('/ganancias/{id}', [GananciasController::class, 'destroy']);

Route::get('usuarios-pdf', [reporteUsuariosController::class, 'indexPdf']);
