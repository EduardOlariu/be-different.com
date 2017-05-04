<?php

namespace App;





use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentBusiness extends Model
{
    use HasUserTraits;

//    use HasPictureTrait;

    use HasTagsTraits;


    protected $table="different_business";

    protected $fillable=['name','email','address','description','city','state','zip','phone','web','how_different','country','industry_id'];
	
	public function industry()
	{
		return $this->belongsTo('App\Industry');
    }
	
}
