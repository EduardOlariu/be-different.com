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
                    <div class="panel-heading">Person Profile</div>

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

                        <!-- Birth Date Form Input -->
                        <div class="form-group">
                            {!! Form::label('birth_date','Birth Date:') !!}
                            {!! Form::text('birth_date',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Gender Form Input -->
                        <div class="form-group">
                            {!! Form::label('gender','Gender:') !!}
                            {!! Form::select('gender',array('Male' => 'Male', 'Female' => 'Female'),null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Country Form Input -->
                        <div class="form-group">
                            {!! Form::label('country','Country:') !!}
                            {!! Form::text('country',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- City Form Input -->
                        <div class="form-group">
                            {!! Form::label('city','City:') !!}
                            {!! Form::text('city',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- About You Form Input -->
                        <div class="form-group">
                            {!! Form::label('about_you','About You:') !!}
                            {!! Form::textarea('about_you',null,array(
                            'placeholder'=>'Tell us WHAT MAKES YOU DIFFERENT (Your MOTTO in life, What guides you in your life).'),
                            ['class'=> 'form-control']) !!}
                        </div>

                        <!-- What Make You Different Form Input -->
                        <div class="form-group">
                            {!! Form::label('how_different','Why You:') !!}
                            {!! Form::textarea('how_different',null,array(
                            'placeholder'=>'Please let us know why would you like to become a member of BE DIFFERENT.'),
                            ['class'=> 'form-control']) !!}
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
