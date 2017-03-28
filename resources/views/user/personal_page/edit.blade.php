<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 28/03/2017
 * Time: 00:29
 */

?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Personal Page</div>

                    <div class="panel-body">

                        {!! Form::model($personalPage,['url'=>'/user/profile/page/edit','method'=>'POST', 'files'=>true]) !!}


                        <div class="">
                            <div class="col-md-12">
                                {!! Form::label('profile_picture','Profile Picture:') !!}
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-3">
                                @if($personalPage->profile_picture)
                                    <a href="{{"/uploads/user/profile_image/$personalPage->profile_picture"}}" data-lity>
                                    {{HTML::image("/uploads/user/profile_image/$personalPage->profile_picture",'Be different Profile Picture',['class'=>'profile_picture preview'])}}
                                    </a>
                                    @else
                                    {{HTML::image("/uploads/anonym.jpg",'Be different Profile Picture',['class'=>'profile_picture preview'])}}
                                    @endif
                            </div>
                            <!-- profile_picture Form Input-->
                            <div class="form-group col-md-offset">

                                {!! Form::file('profile_picture',old('profile_picture'),['class'=> 'form-control']) !!}
                            </div>

                        </div>


                        {{--<!-- Profile_picture Form Input -->--}}
                        {{--<div class="form-group">--}}
                        {{--{!! Form::label('profile_picture','Profile picture:') !!}--}}
                        {{--{!! Form::text('profile_picture',old('profile_picture'),['class'=> 'form-control']) !!}--}}
                        {{--</div>--}}


                    <!-- Short_description Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('short_description','Short description:') !!}
                            {!! Form::text('short_description',old('short_desciption'),['class'=> 'form-control']) !!}
                        </div>


                        <!-- Description Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('description','Description:') !!}
                            {!! Form::text('description',old('description'),['class'=> 'form-control']) !!}
                        </div>


                        <!-- Save Form Input-->
                        <div class="form-group">
                            {!! Form::submit('Save',['class' => 'btn btn-primary form-control']) !!}
                        </div>

                        @include('layouts.partials.errors')
                        {!! Form::close()!!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

