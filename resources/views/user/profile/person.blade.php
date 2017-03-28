<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 22/03/2017
 * Time: 12:00
 */
?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Profile</div>

                    <div class="panel-body">
                        <div class="secure">Upload form</div>
                        {!! Form::open(array('url'=>'/user/profile/test_image','method'=>'POST', 'files'=>true)) !!}
                        <div class="control-group">
                            <div class="controls">
                                {!! Form::file('image') !!}
                                <p class="errors">{!!$errors->first('image')!!}</p>
                                @if(Session::has('error'))
                                    <p class="errors">{!! Session::get('error') !!}</p>
                                @endif
                            </div>
                        </div>
                        <div id="success"> </div>
                        {!! Form::submit('Submit', array('class'=>'send-btn')) !!}
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
