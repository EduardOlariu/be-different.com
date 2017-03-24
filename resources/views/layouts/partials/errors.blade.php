<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 24/03/2017
 * Time: 09:45
 */ ?>

@if (count($errors))
    <div class="alert alert-danger">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{$error}}</li>
            @endforeach
        </ul>
    </div>
@endif