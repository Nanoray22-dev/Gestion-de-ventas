<?php
use App\Models\Ingresos;
use Illuminate\Database\Seeder;

class IngresosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ingresos::create([
            'concepto' => 'Sale of Product A',
            'valor' => 2000,
        ]);

        Ingresos::create([
            'concepto' => 'Service Revenue',
            'valor' => 1500,
        ]);

        // Add more seed data here if needed
    }
}