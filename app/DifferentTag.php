<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DifferentTag extends Model
{

    protected $fillable=['name'];


    public function type()
    {
        return $this->morphedByMany(['App\DifferentPerson','App\DifferentBusiness','App\DifferentWorld'],'different_tag');
    }

}
