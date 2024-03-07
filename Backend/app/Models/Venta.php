<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo_venta',
        'user_id',
        'producto',
        'precio',
        'cantidad',
        'vendedor',
        'importe_total',
    ];
}
