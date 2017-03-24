<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MotivationalVideo extends Model
{

    protected $fillable=[
        'name', 'description', 'short_description','link'
    ];


    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

}
