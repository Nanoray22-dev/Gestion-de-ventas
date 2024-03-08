<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use Illuminate\Http\Request;

class ComprasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $compras = Compras::all();
        return response()->json($compras);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $compra = Compras::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }

        return response()->json($compra);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'fecha' => 'required|date',
        'nro_venta' => 'required|string',
        'vendedor' => 'required|string',
        'cliente' => 'required|exists:usuarios,id',
        'est_venta' => 'required|string',
        'est_pago' => 'required|string|in:Pagado,No Pagado,Realizado', // Agregado "Realizado"
        'total' => 'required|numeric',
        'pagado' => 'required|numeric', 
        'saldo' => 'required|numeric',
        'met_pago' => 'required|string',
    ]);

    $compra = Compras::create($request->all());

    return response()->json($compra, 201);
}


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $compra = Compras::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }

        $request->validate([
            'fecha' => 'required|date',
            'nro_venta' => 'required|string',
            'vendedor' => 'required|string',
            'cliente' => 'required|exists:usuarios,id',
            'est_venta' => 'required|string',
            'est_pago' => 'required|string|in:Pagado,No Pagado,Realizado', // Agregado "Realizado"
            'total' => 'required|numeric',
            'pagado' => 'required|string',
            'saldo' => 'required|numeric',
            'met_pago' => 'required|string',
        ]);

        $compra->update($request->all());

        return response()->json($compra, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $compra = Compras::find($id);

        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }

        $compra->delete();

        return response()->json(null, 204);
    }
}
