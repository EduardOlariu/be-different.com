<?php

namespace App;

use App\Notifications\UserResetPassword;
use App\Traits\HasRolesTraits;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Role;
class User extends Authenticatable
{
    use Notifiable,HasRolesTraits;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new UserResetPassword($token));
    }


    public function type()
    {
        return $this->morphTo();
    }

    public function personalPage()
    {
        return $this->hasOne('App\PersonalPage');
    }




}
