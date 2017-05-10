<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable=['name','body','type'];
	
	public function type()
	{
		return $this->belongsTo('App\Type','type');
    }

	public function scopeIsType($query,$val)
	{
		return $query->where('type',$val)->get();
    }
	
	public function comments()
	{
		// return $this->hasOne('App\User','userable_id','id')
		//   ->where('userable->type','App\DifferentPerson');
		return $this->morphMany('\App\Comment','commentable');
	}
}
