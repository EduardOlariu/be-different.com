<?php

namespace App;


use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentBusiness extends Model
{
    use HasUserTraits;
//    use HasPictureTrait;

    protected $table="different_business";
    protected $fillable=['name','email','address','description','city','state','zip','phone','web','how_different'];

    //
}
