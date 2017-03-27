<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MotivationalVideo extends Model
{

    protected $fillable=[
        'name', 'description', 'short_description','link','slug'
    ];


    /**
     * Return the admin that added $this video
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

}
