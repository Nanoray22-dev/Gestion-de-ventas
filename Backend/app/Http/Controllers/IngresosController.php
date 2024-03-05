<?php

namespace App\Http\Controllers;

use App\Models\Ingresos;
use Illuminate\Http\Request;

class IngresosController extends Controller
{
    public function index()
    {
        $ingresos = Ingresos::all();
        return response()->json($ingresos);
    }

    public function show(Ingresos $ingresos)
    {
        return response()->json($ingresos);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([]);

        $ingresos = Ingresos::create($validatedData);
        return response()->json($ingresos, 201);
    }

    public function update(Request $request, Ingresos $ingresos)
    {
        $validatedData = $request->validate([]);

        $ingresos->update($validatedData);
        return response()->json($ingresos, 200);
    }

    public function destroy(Ingresos $ingresos)
    {
        $ingresos->delete();
        return response()->json(null, 204);
    }

    public function getIngresos()
    {
        $ingresos = Ingresos::all();
        $totalIngresos = $ingresos->reduce(function ($carry, $ingreso) {
            return $carry + $ingreso->valor; 
        });
        return response()->json(['ingresos' => $ingresos, 'totalIngresos' => $totalIngresos]);
    }
}
