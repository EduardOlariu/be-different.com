<?php

namespace App;

use App\Traits\BelongsToUser;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed profile_picture
 * @property string short_description
 * @property string description
 */
class PersonalPage extends Model
{
    use BelongsToUser;
    protected $fillable=['short_description','description'];
    protected $table="personal_pages";

}
