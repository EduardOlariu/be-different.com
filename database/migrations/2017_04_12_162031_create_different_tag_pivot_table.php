<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDifferentTagPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('different_tag', function (Blueprint $table) {
            $table->nullableMorphs('type');
            $table->integer('different_tag_id')->unsigned()->index();
            $table->foreign('different_tag_id')->references('id')->on('tags')->onDelete('cascade');
            $table->index('type_id');
            $table->index('type_type');
            $table->unique(array('type_type','type_id'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('different_tag');
    }
}
