<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateDifferentPeopleAddForms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('different_people', function (Blueprint $table) {
            $table->string('profile_picture')->nullable();
            $table->string('birth_date')->nullable();
            $table->string('gender')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->text('about_you')->nullable();
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
        Schema::table('different_people', function (Blueprint $table) {
//            $table->dropColumn('profile_picture');
            $table->dropColumn('birth_date');
            $table->dropColumn('gender');
            $table->dropColumn('country');
            $table->dropColumn('city');
            $table->dropColumn('about_you');
            $table->dropColumn('how_different');


        });
    }
}
