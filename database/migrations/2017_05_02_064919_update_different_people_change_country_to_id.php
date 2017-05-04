<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateDifferentPeopleChangeCountryToId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::table('different_people', function (Blueprint $table) {
		    $table->integer('country')->change();
		
		
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
		    $table->string('country')->change();
		
	    });
    }
}
