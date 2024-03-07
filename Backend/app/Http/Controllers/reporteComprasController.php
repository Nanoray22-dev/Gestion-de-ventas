<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class reporteComprasController extends Controller
{
    public function indexPdf()
    {
        $reportes = DB::table('compras')->get();
        $pdf = PDF::loadView('reporteCompras', ['reportes' => $reportes]);
        return $pdf->stream();
    }
}
