<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class usuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = Usuarios::all();
        return response()->json($users);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:usuarios',
            'password' => 'required',
            'email' => 'required|email|unique:usuarios',
            'empresa' => 'required',
            'telefono' => 'required',
            'role' => 'required|in:Administrador,RespVentasTiendas,SupervisorComercial',
            'status' => 'required|in:active,inactive',
        ]);

        $user = Usuarios::create($request->all());
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = Usuarios::find($id);
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = Usuarios::find($id);
        if (!$user) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $request->validate([
            'username' => 'required|unique:usuarios,username,' . $id,
            'email' => 'required|email|unique:usuarios,email,' . $id,
            'role' => 'required|in:Administrador,RespVentasTiendas,SupervisorComercial',
            'status' => 'required|in:active,inactive',
        ]);

        $user->update($request->all());
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = Usuarios::find($id);
        if(!$user){
            return response()->json(['error' => 'Usuarios no encontrado'], 404);
        }
        $user->delete();
        return response()->json(null, 204);

    }
}
