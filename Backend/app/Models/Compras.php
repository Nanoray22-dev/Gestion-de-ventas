<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compras extends Model
{
    use HasFactory;

    protected $table = 'compras';

    protected $primaryKey = 'id';

    protected $fillable = [
        'fecha',
        'nro_venta',
        'vendedor',
        'cliente',
        'est_venta',
        'est_pago',
        'total',
        'pagado',
        'saldo',
        'met_pago',
    ];
}
