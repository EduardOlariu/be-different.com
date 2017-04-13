<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 22/03/2017
 * Time: 12:00
 */
//$dp = Auth::guard('user')->user()->type;
?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Business Profile
                        @if(Auth::guard('user')->user()->hasRole('Inactive'))
                            <div style="float:right"><a href="/user/profile/reset">Reset Profile</a></div>
                        @endif
                    </div>

                    <div class="panel-body">
                    {!! Form::model($different,['url'=>'/user/profile/edit','method'=>'POST']) !!}

                        <!-- Profil Picture -->

                        <div class="">
                            <div class="col-md-12">
                                {!! Form::label('profile_picture','Profile Picture:') !!}
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-3">
                                @if($different->profile_picture)
                                    <a href="{{"/uploads/user/profile_image/$different->profile_picture"}}" data-lity>
                                        {{HTML::image("/uploads/user/profile_image/$different->profile_picture",'Business Profile Picture',['class'=>'profile_picture preview'])}}
                                    </a>
                                @else
                                    {{HTML::image("/uploads/anonym.jpg",'Business Profile Picture',['class'=>'profile_picture preview'])}}
                                @endif
                            </div>
                            <!-- profile_picture Form Input-->
                            <div class="form-group col-md-offset">

                                {!! Form::file('profile_picture',old('profile_picture'),['class'=> 'form-control']) !!}
                            </div>

                        </div>

                        <!-- /Profile Picture -->

                        <!-- Business_Name Form Input -->
                        <div class="form-group">
                            {!! Form::label('name','Business Name:') !!}
                            {!! Form::text('name',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Business_Email Form Input -->
                        <div class="form-group">
                            {!! Form::label('email','Business Email:') !!}
                            {!! Form::text('email',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Address Form Input -->
                        <div class="form-group">
                            {!! Form::label('address','Address:') !!}
                            {!! Form::text('address',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Description Form Input -->
                        <div class="form-group">
                            {!! Form::label('description','Description:') !!}
                            {!! Form::textarea('description',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- City Form Input -->
                        <div class="form-group">
                            {!! Form::label('city','City:') !!}
                            {!! Form::text('city',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- State Form Input -->
                        <div class="form-group">
                            {!! Form::label('state','State:') !!}
                            {!! Form::text('state',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Zip Form Input -->
                        <div class="form-group">
                            {!! Form::label('zip','Zip:') !!}
                            {!! Form::text('zip',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Phone Form Input -->
                        <div class="form-group">
                            {!! Form::label('phone','Phone:') !!}
                            {!! Form::text('phone',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Web Form Input -->
                        <div class="form-group">
                            {!! Form::label('web','Web:') !!}
                            {!! Form::text('web',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- How_Different Form Input -->
                        <div class="form-group">
                            {!! Form::label('how_different','How Different:') !!}
                            {!! Form::text('how_different',null,['class'=> 'form-control']) !!}
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
