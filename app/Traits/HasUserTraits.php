<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 20/03/2017
 * Time: 14:24
 */

namespace App\Traits;

trait HasUserTraits
{

    public function user()
    {
       // return $this->hasOne('App\User','userable_id','id')
         //   ->where('userable->type','App\DifferentPerson');
        return $this->morphOne('\App\User','type');
    }
}