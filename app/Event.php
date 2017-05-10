<?php

namespace App;

use App\Traits\BelongsToUser;
use App\Traits\HasCommentsTraits;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
	use HasCommentsTraits;
	use BelongsToUser;
    protected $fillable=['name','body','type','user_id'];
	
	public function type()
	{
		return $this->belongsTo('App\Type','type');
    }

	public function scopeIsType($query,$val)
	{
		return $query->where('type',$val)->get();
    }
	
}
