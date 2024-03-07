<?php

use App\Http\Controllers\GananciasController;
use App\Http\Controllers\GastosController;
use App\Http\Controllers\IngresosController;
use App\Http\Controllers\reporteComprasController;
use App\Http\Controllers\reporteUsuariosController;
use App\Http\Controllers\usuariosController;
use App\Http\Controllers\VentasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ComprasController;

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


Route::get('/ventas', [VentasController::class, 'index']);
Route::get('/ventas/{id}', [VentasController::class, 'show']);
Route::post('/ventas', [VentasController::class, 'store']);
Route::put('/ventas/{id}', [VentasController::class, 'update']);
Route::delete('/ventas/{id}', [VentasController::class, 'destroy']);

Route::get('usuarios-pdf', [reporteUsuariosController::class, 'indexPdf']);
Route::get('compras-pdf', [reporteComprasController::class, 'indexPdf']);

Route::get('/compras', [ComprasController::class, 'index']);
Route::get('/compras/{id}', [ComprasController::class, 'show']);
Route::post('/compras', [ComprasController::class, 'store']);
Route::put('/compras/{id}', [ComprasController::class, 'update']);
Route::delete('/compras/{id}', [ComprasController::class, 'destroy']);
