<?php

namespace App\Http\Controllers;

use App\Models\Venta;
use App\Models\Ventas;
use Illuminate\Http\Request;

class VentasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Obtener todas las ventas
        $ventas = Venta::all();
        return response()->json(['ventas' => $ventas], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // No es necesario para una API RESTful
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validar los datos de la solicitud
        $request->validate([
            'codigo_venta' => 'required|string|unique:ventas|max:10',
            'user_id' => 'required|exists:usuarios,id',
            'producto' => 'required|string',
            'precio' => 'required|numeric|min:0',
            'cantidad' => 'required|integer|min:1',
            'vendedor' => 'required|string',
            'importe_total' => 'required|numeric|min:0',
        ]);

        // Crear una nueva venta
        $venta = Venta::create($request->all());

        return response()->json(['venta' => $venta], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Venta $ventas)
    {
        // Retorna la venta especificada por su ID
        return response()->json(['venta' => $ventas], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Venta $ventas)
    {
        // No es necesario para una API RESTful
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Venta $ventas)
    {
        // Validar los datos de la solicitud
        $request->validate([
            'codigo_venta' => 'required|string|max:10|unique:ventas,codigo_venta,'.$ventas->id,
            'user_id' => 'required|exists:usuarios,id',
            'producto' => 'required|string',
            'precio' => 'required|numeric|min:0',
            'cantidad' => 'required|integer|min:1',
            'vendedor' => 'required|string',
            'importe_total' => 'required|numeric|min:0',
        ]);

        // Actualizar la venta
        $ventas->update($request->all());

        return response()->json(['venta' => $ventas], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Venta $ventas)
    {
        // Eliminar la venta
        $ventas->delete();
        return response()->json(['message' => 'Venta eliminada correctamente'], 200);
    }
}

