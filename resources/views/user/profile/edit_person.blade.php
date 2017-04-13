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
                        Person Profile
                        @if(Auth::guard('user')->user()->hasRole('Inactive'))
                            <div style="float:right"><a href="/user/profile/reset">Reset Profile</a></div>
                        @endif
                    </div>



                    <div class="panel-body">


                    {!! Form::model($different,['url'=>'/user/profile/edit','method'=>'POST','files'=>true]) !!}



                        @include('user.profile.partials.image')

                        <!-- First_name Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('first_name','First name:') !!}
                            {!! Form::text('first_name',old('fist_name'),['class'=> 'form-control']) !!}
                        </div>


                        <!-- Last_name Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('last_name','Last name:') !!}
                            {!! Form::text('last_name',old('last_name'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- Birth Date Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('birth_date','Birth Date:') !!}
                            <div class="input-group date" id="birth_date_div" {{--onChange="verifyDate('birth_date')"--}}>
                                <input type="text" class="form-control" name="birth_date" value="{{$different->birth_date}}" id="birth_date"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                            </div>

                        </div>

                        <!-- Gender Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('gender','Gender:') !!}
                            {!! Form::select('gender',array('Male' => 'Male', 'Female' => 'Female'),old('gender'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- Country Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('country','Country:') !!}
                            {!! Form::text('country',old('country'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- City Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('city','City:') !!}
                            {!! Form::text('city',old('city'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- About You Form Input -->
                        <div class="form- col-md-12">
                            {!! Form::label('about_you','About You:') !!}
                            {!! Form::textarea('about_you',old('about_you'),array(
                            'placeholder'=>'Tell us WHAT MAKES YOU DIFFERENT (Your MOTTO in life, What guides you in your life).'),
                            ['class'=> 'form-control']) !!}
                        </div>

                        <!-- What Make You Different Form Input -->
                        <div class="form-group col-md-12">
                            {!! Form::label('how_different','Why You:') !!}
                            {!! Form::textarea('how_different',old('how_different'),array(
                            'placeholder'=>'Please let us know why would you like to become a member of BE DIFFERENT.'),
                            ['class'=> 'form-control']) !!}
                        </div>


                        <button class="btn btn-success col-md-12" type="submit">Save</button>
                        @include('layouts.partials.errors')

                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
@section('scripts')
    <script type="application/javascript">
        $('#birth_date_div').datepicker({
            format: "yyyy-mm-dd",
            maxViewMode: 3,
            autoclose: true,
            endDate: "today()",
            startView: 2,
            calendarWeeks: true,
            toggleActive: true
        });

//        function verifyDate(id) {
//            var val=$('#'+id+' input').val();
//            var date=val.split('/');
//            if (date[0]<
//            alert(date[0]);
//            alert(date[1]);
//            alert(date[2]);
//            alert(val);
//        }


    </script>
@endsection
