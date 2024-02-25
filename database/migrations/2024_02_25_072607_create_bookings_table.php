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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string("code");
            $table->string("customer_name");
            $table->string("customer_email");
            $table->string("customer_address");
            $table->string("customer_phone");
            $table->string("destination");
            $table->string("number_of_stay");
            $table->string("number_of_people");
            $table->string("number_of_adult");
            $table->string("number_of_children");
            $table->string("transportation");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
