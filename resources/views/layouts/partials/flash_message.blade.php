<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 15/03/2017
 * Time: 14:30
 */
?>


<div class="container-fluid">


@if ($flash=session('info'))

    <div class="alert alert-info col-md-12" id="flash_message" role="alert" style="">

        {{$flash}}


    </div>
@endif
@if ($flash=session('success'))

    <div class="alert alert-success col-md-12" id="flash_message" role="alert" style="">

        {{$flash}}


    </div>
@endif
@if ($flash=session('danger'))

    <div class="alert alert-danger col-md-12" id="flash_message" role="alert" style="">

        {{$flash}}


    </div>
@endif

@if ($flash=session('error'))

    <div class="alert alert-warning col-md-12" id="flash_message" role="alert" style="">

        {{$flash}}


    </div>
@endif
<style>

    #flash_message {
        position: absolute;
        z-index: 100;
        top: 5%;
        text-align: center;
    }
</style>
</div>