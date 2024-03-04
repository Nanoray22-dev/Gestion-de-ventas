<?php

namespace App\Http\Controllers;

use App\Models\Gastos;
use Illuminate\Http\Request;

class GastosController extends Controller
{
    public function index()
    {

        $gastos = Gastos::all();
        return response()->json($gastos);
    }

    public function show(Gastos $gastos)
    {
        return response()->json($gastos);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([

        ]);

        $gastos = Gastos::create($validatedData);
        return response()->json($gastos, 201);
    }

    public function update(Request $request, Gastos $gastos)
    {
        $validatedData = $request->validate([

        ]);

        $gastos->update($validatedData);
        return response()->json($gastos, 200);
    }

    public function destroy(Gastos $gastos)
    {
        $gastos->delete();
        return response()->json(null, 204);
    }
}