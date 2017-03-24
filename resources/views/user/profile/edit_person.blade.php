<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 22/03/2017
 * Time: 12:00
 */
$dp = Auth::guard('user')->user()->type;
?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Profile</div>

                    <div class="panel-body">
                        {!! Form::model($dp,['url'=>'/user/profile/edit','method'=>'POST']) !!}

                        <!-- First_name Form Input -->
                            <div class="form-group">
                                {!! Form::label('first_name','First name:') !!}
                                {!! Form::text('first_name',null,['class'=> 'form-control']) !!}
                            </div>


                            <!-- Last_name Form Input -->
                            <div class="form-group">
                                {!! Form::label('last_name','Last name:') !!}
                                {!! Form::text('last_name',null,['class'=> 'form-control']) !!}
                            </div>


                            <button class="btn btn-success" type="submit">Save</button>
                            @include('layouts.partials.errors')

                            {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
