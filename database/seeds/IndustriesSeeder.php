<?php



// composer require laracasts/testdummy

use Flynsarmy\CsvSeeder\CsvSeeder;


class IndustriesSeeder extends CsvSeeder
{
	public function __construct()
	{
		$this->table = 'industries';
		$this->filename = base_path() . '/database/seeds/IndustriesList.csv';
		$this->mapping = [
			0 => 'name'
		];
		$this->csv_delimiter='|';
	}
	
	public function run()
	{
//		DB:disableQueryLog();
		DB::table($this->table);
		
		parent::run();
		
	}
}
