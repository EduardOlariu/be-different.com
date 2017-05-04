<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateDifferentWorldAddCountryAndIndustry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
	    Schema::table('different_world', function (Blueprint $table) {
		    $table->integer('country_id')->nullable();
		    $table->integer('industry_id')->unsigned()->nullable();
		    $table->foreign('industry_id')->references('id')->on('industry')->onDelete('cascade');
	    });
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('different_world',function (Blueprint $table){
        	$table->dropColumn('country_id');
        	$table->dropColumn('industry_id');
        });
    }
}
