<?php

namespace App;


use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentPerson extends Model
{
    //
    use HasUserTraits;
//    use HasPictureTrait;

//    protected $table="different-person";
    protected $fillable = [
        'first_name','last_name','birth_date','gender','country','city','about_you','how_different'
    ];
}
