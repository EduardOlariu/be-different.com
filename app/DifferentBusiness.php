<?php

namespace App;

use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentBusiness extends Model
{
    use HasUserTraits;

    protected $table="different_business";

    //
}
