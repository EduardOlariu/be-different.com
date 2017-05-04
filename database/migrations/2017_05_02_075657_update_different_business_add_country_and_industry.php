<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateDifferentBusinessAddCountryAndIndustry extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('different_business', function (Blueprint $table) {
			$table->integer('country')->nullable();
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
		Schema::table('different_business', function (Blueprint $table) {
			
			$table->dropColumn('country');
			$table->dropColumn('industry_id');
			
		});
	}
}
