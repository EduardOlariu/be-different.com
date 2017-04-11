<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */


//$personalPage->profile_picture = "Default Profile Picture";
//$personalPage->short_description = "Default Profile Picture";
//$personalPage->description = "Default Profile Picture";
    public function up()
    {
        Schema::create('personal_pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('profile_picture');
            $table->text('short_description');
            $table->text('description');
            $table->integer('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('personal_pages');
    }
}
