<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 11/04/2017
 * Time: 10:43
 */

namespace App\Traits;


//09/06/2014
//2014-06-09
//


trait MySQLTraits
{
    private static function dateToMySQL($old_date)
    {
        $date=explode("/",$old_date);
        $new_date=$date[2]."-".$date[1]."-".$date[0];
        return $new_date;
    }
}