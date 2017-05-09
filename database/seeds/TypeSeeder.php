<?php

use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
	public function run()
	{
		DB::table('types')->truncate();
		DB::table('types')->insert([
			                           'name' => 'Personal'
		                           ]);
		DB::table('types')->insert([
			                           'name' => 'Be Different'
		                           ]);
		DB::table('types')->insert([
			                           'name' => 'Official'
		                           ]);
	}
}
