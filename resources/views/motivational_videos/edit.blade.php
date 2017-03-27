<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 24/03/2017
 * Time: 11:48
 */
?>

@extends('admin.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Edit Motivational Video</div>

                    <div class="panel-body">
                    {!! Form::model($motivationalVideo,['url'=>'/admin/motivational-videos/'.$motivationalVideo->slug.'/edit','method'=>'POST']) !!}


                    <!-- Name Form Input -->
                        <div class="form-group">
                            {!! Form::label('name','Name:') !!}
                            {!! Form::text('name',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Description Form Input -->
                        <div class="form-group">
                            {!! Form::label('description','Description:') !!}
                            {!! Form::text('description',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Short_description Form Input -->
                        <div class="form-group">
                            {!! Form::label('short_description','Short description:') !!}
                            {!! Form::text('short_description',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Link Form Input -->
                        <div class="form-group">
                            {!! Form::label('link','Link:') !!}
                            {!! Form::text('link',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Slug Form Input -->
                        <div class="form-group">
                            {!! Form::label('slug','Slug:') !!}
                            {!! Form::text('slug',null,['class'=> 'form-control']) !!}
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
