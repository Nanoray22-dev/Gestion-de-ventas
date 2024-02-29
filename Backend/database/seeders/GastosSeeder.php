<?php

use App\Models\Gastos;
use Illuminate\Database\Seeder;

class GastosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gastos::create([
            'concepto' => 'Office Rent',
            'valor' => 1500,
        ]);

        Gastos::create([
            'concepto' => 'Utilities',
            'valor' => 500,
        ]);

    }
}