<?php

namespace App;

use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentPerson extends Model
{
    //
    use HasUserTraits;

//    protected $table="different-person";
    protected $fillable = [
        'name'
    ];
}
