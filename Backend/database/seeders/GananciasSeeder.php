<?php

use App\Models\Ganancias;
use Illuminate\Database\Seeder;

class GananciasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ganancias::create([
            'concepto' => 'Rent',
            'valor' => 1000,
        ]);

        Ganancias::create([
            'concepto' => 'Interest',
            'valor' => 500,
        ]);

    }
}