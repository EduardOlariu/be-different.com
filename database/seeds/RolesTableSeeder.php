<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->truncate();
        DB::table('roles')->insert([
            'id' => '0',
            'name' => 'Inactive'
        ]);
        DB::table('roles')->insert([
            'name' => 'Subscriber'
        ]);
        DB::table('roles')->insert([
            'name' => 'Contributor'
        ]);
        DB::table('roles')->insert([
            'name' => 'Author'
        ]);
        DB::table('roles')->insert([
            'name' => 'Editor'
        ]);


    }
}
