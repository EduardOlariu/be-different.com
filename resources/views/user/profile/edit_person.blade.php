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
                    <div class="panel-heading">Person Profile
                        @if(Auth::guard('user')->user()->hasRole('Inactive'))
                            <div style="float:right"><a href="/user/profile/reset">Reset Profile</a></div>
                        @endif
                    </div>

                    <!-- Profile Picture -->

                    <div class="">
                        <div class="col-md-12">
                            {!! Form::label('profile_picture','Profile Picture:') !!}
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-3">
                            @if($different->profile_picture)
                                <a href="{{"/uploads/user/profile_image/$different->profile_picture"}}" data-lity>
                                    {{HTML::image("/uploads/user/profile_image/$different->profile_picture",'Be different Profile Picture',['class'=>'profile_picture preview'])}}
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

                    <!-- /Profile Picture -->




                    <div class="panel-body">

                    {!! Form::model($different,['url'=>'/user/profile/edit','method'=>'POST']) !!}

                    <!-- First_name Form Input -->
                        <div class="form-group">
                            {!! Form::label('first_name','First name:') !!}
                            {!! Form::text('first_name',old('fist_name'),['class'=> 'form-control']) !!}
                        </div>


                        <!-- Last_name Form Input -->
                        <div class="form-group">
                            {!! Form::label('last_name','Last name:') !!}
                            {!! Form::text('last_name',old('last_name'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- Birth Date Form Input -->
                        <div class="form-group">
                            {!! Form::label('birth_date','Birth Date:') !!}
                            <div class="input-group date" id="birth_date_div" {{--onChange="verifyDate('birth_date')"--}}>
                                <input type="text" class="form-control" name="birth_date" value="{{$different->birth_date}}" id="birth_date"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                            </div>

                        </div>

                        <!-- Gender Form Input -->
                        <div class="form-group">
                            {!! Form::label('gender','Gender:') !!}
                            {!! Form::select('gender',array('Male' => 'Male', 'Female' => 'Female'),old('gender'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- Country Form Input -->
                        <div class="form-group">
                            {!! Form::label('country','Country:') !!}
                            {!! Form::text('country',old('country'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- City Form Input -->
                        <div class="form-group">
                            {!! Form::label('city','City:') !!}
                            {!! Form::text('city',old('city'),['class'=> 'form-control']) !!}
                        </div>

                        <!-- About You Form Input -->
                        <div class="form-group">
                            {!! Form::label('about_you','About You:') !!}
                            {!! Form::textarea('about_you',old('about_you'),array(
                            'placeholder'=>'Tell us WHAT MAKES YOU DIFFERENT (Your MOTTO in life, What guides you in your life).'),
                            ['class'=> 'form-control']) !!}
                        </div>

                        <!-- What Make You Different Form Input -->
                        <div class="form-group">
                            {!! Form::label('how_different','Why You:') !!}
                            {!! Form::textarea('how_different',old('how_different'),array(
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
