<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 10/05/2017
 * Time: 12:50
 */
namespace App\Traits;

use function compact;
use Illuminate\Support\Facades\Auth;

trait HasCommentsTraits
{
	
	public function comments()
	{
		// return $this->hasOne('App\User','userable_id','id')
		//   ->where('userable->type','App\DifferentPerson');
		return $this->morphMany('\App\Comment','commentable');
	}
	
	public function addComment($body,$user_id)
	{
//		$user_id = Auth::guard('user')->user->id;
		
		$this->comments()->create(compact('body','user_id'));
	}
}
