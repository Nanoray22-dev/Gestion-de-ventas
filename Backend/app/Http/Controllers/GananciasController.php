<?php
namespace App\Http\Controllers;

use App\Models\Ganancias;
use Illuminate\Http\Request;

class GananciasController extends Controller
{
    public function index()
    {
        // Retrieve all ganancias from the database
        $ganancias = Ganancias::all();
        return response()->json($ganancias);
    }

    public function show(Ganancias $ganancias)
    {
        return response()->json($ganancias);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'concepto' => 'required',
            'valor' => 'required',
        ]);

        $ganancias = Ganancias::create($validatedData);
        return response()->json($ganancias, 201);
    }

    public function update(Request $request, Ganancias $ganancias)
    {
        $validatedData = $request->validate([
            'concepto' => 'required',
            'valor' => 'required',
        ]);

        $ganancias->update($validatedData);
        return response()->json($ganancias, 200);
    }

    public function destroy(Ganancias $ganancias)
    {
        $ganancias->delete();
        return response()->json(null, 204);
    }
}