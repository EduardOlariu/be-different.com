<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateDifferentWorldAddForms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('different_world', function (Blueprint $table) {
            $table->string('email')->nullable();
            $table->text('description')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('adress')->nullable();
            $table->string('web')->nullable();
            $table->text('how_different')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('different_world', function (Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('description');
            $table->dropColumn('address');
            $table->dropColumn('city');
            $table->dropColumn('state');
            $table->dropColumn('zip');
            $table->dropColumn('adress');
            $table->dropColumn('web');
            $table->dropColumn('how_different');

        });
    }
}
