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
                    <div class="panel-heading">
                        Organization Profile
                        @if(Auth::guard('user')->user()->hasRole('Inactive'))
                            <div style="float:right"><a href="/user/profile/reset">Reset Profile</a></div>
                        @endif
                    </div>

                    <div class="panel-body">

                    {!! Form::model($different,['url'=>'/user/profile/edit','method'=>'POST','files'=>true]) !!}



                        @include('user.profile.partials.image')

                        </div>
                        <!-- Organization_Name Form Input -->

                        <div class="form-group col-md-12">
                            {!! Form::label('name','Organization Name:') !!}
                            {!! Form::text('name',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Organization_Email Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('email','Organization Email:') !!}
                            {!! Form::text('email',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Industry Form Input -->
                    <div class="form-group col-md-12" >
                        {!! Form::label('industry_id','Industry:') !!}
                        {!! Form::select('industry_id',array_merge([''=>'Please select'],$industries),null,['id'=>'industry','class'=> 'form-control']) !!}
                    </div >


                        <!-- Address Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('address','address:') !!}
                            {!! Form::text('address',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Description Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('description','Description:') !!}
                            {!! Form::textarea('description',null,['class'=> 'form-control']) !!}
                        </div>


                        <!-- Country Form Input -->
                    <div class="form-group col-md-12" >
                        {!! Form::label('country','Country:') !!}
                        {!! Form::select('country_id',array_merge([''=>'Please select'],$countries),null,['id'=> 'countries','class'=> 'form-control']) !!}
                    </div >

                        <!-- City Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('city','City:') !!}
                            {!! Form::text('city',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- State Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('state','State:') !!}
                            {!! Form::text('state',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Zip Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('zip','Zip:') !!}
                            {!! Form::text('zip',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Phone Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('phone','Phone:') !!}
                            {!! Form::text('phone',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- Web Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('web','Web:') !!}
                            {!! Form::text('web',null,['class'=> 'form-control']) !!}
                        </div>

                        <!-- How_Different Form Input -->
                        <div class="form-group col-md-12">
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
@section('scripts')
    <script >
        $("#countries").select2({
            placeholder: "Select a state",
            allowClear: true
        });
        $("#industry").select2({
            placeholder: "Select an industry",
            allowClear: true
        });
    </script >
@endsection