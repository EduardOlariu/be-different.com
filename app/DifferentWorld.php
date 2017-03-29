<?php

namespace App;

use App\Traits\HasUserTraits;
use Illuminate\Database\Eloquent\Model;

class DifferentWorld extends Model
{
    use HasUserTraits;
    protected $table = 'different_world';
}
