<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 11/04/2017
 * Time: 13:03
 */

namespace App\Traits;


use App\User;

trait BelongsToUser
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}