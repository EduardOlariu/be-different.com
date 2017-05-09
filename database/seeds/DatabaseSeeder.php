<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call('CountriesSeeder');
        $this->command->info('Seeded the countries!');
        $this->call('RolesTableSeeder');
        $this->command->info('Seeded the roles!');
	    $this->call('IndustriesSeeder');
	    $this->command->info('Seeded the industries!');
	    $this->call('TypeSeeder');
	    $this->command->info('Seeded the types!');
    }
}
