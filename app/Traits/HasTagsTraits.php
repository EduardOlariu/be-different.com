<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 11/04/2017
 * Time: 13:03
 */

namespace App\Traits;


trait HasTagsTraits
{
    public function tags()
    {
        return $this->morphToMany('App\DifferentTag','type','different_tag');
    }
}