<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDifferentPeopleChangeBirthDateToDate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('different_people', function (Blueprint $table) {
            $table->date('birth_date')->change();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('different_people', function (Blueprint $table) {
            $table->string('birth_date')->change();
        });
    }
}
