<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 15/03/2017
 * Time: 14:30
 */
?>



@if (!empty($info))

    <div class="alert alert-warning col-md-12" id="flash_message" role="alert" style="">

        {{$info}}


    </div>
@endif


@if (!empty($warning))

    <div class="alert alert-warning col-md-12" id="flash_message" role="alert" style="">

        {{$warning}}


    </div>
@endif
@if (!empty($success))

    <div class="alert alert-success col-md-12" id="flash_message" role="alert" style="">

        {{$success}}


    </div>
@endif
@if (!empty($danger))

    <div class="alert alert-danger col-md-12" id="flash_message" role="alert" style="">

        {{$error}}


    </div>
@endif
<style>

    #flash_message {
        position: absolute;
        z-index: 10;
        top: 5%;
        text-align: center;
    }
</style>