<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class reporteUsuariosController extends Controller
{
    public function indexPdf()
    {
        $reportes = DB::table('usuarios')->get();
        $pdf = PDF::loadView('reporte', ['reportes' => $reportes]);
        return $pdf->stream();
    }
}
