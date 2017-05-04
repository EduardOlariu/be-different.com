<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    protected $fillable=['name'];
	
	/**
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function differentBusiness()
    {
    	return $this->hasMany('App\DifferentBusiness');
    }
	
	
	/**
	 *
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function differentWorld()
	{
		return $this->hasMany('App\DifferentBusiness');
	}
}
