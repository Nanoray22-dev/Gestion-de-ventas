<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->date("fecha");
            $table->string("nro_venta");
            $table->string("vendedor");
            $table->unsignedBigInteger("cliente");
            $table->string("est_venta");
            $table->string("est_pago");
            $table->float("total");
            $table->string("pagado");
            $table->float("saldo");
            $table->string("met_pago");
            $table->timestamps();
            $table->foreign('cliente')->references('id')->on('usuarios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
