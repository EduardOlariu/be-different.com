<?php

namespace App;

use App\Traits\BelongsToUser;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
	use BelongsToUser;
	protected $fillable=['body','user_id'];
	
	public function commentable()
	{
		return $this->morphTo();
	}
}
