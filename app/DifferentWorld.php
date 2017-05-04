<?php

namespace App;




use App\Traits\HasTagsTraits;

use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentWorld extends Model
{
    use HasUserTraits;



    use HasTagsTraits;


    protected $table = 'different_world';
    protected $fillable=['name','email','address','description','city','state','zip','phone','web','how_different','industry_id','country_id'];
	
	
	
	public function industry()
	{
		return $this->belongsTo('App\Industry');
	}
	
	
	
}
