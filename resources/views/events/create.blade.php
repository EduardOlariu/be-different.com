<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 09/05/2017
 * Time: 12:04
 */ ?>

@extends('user.layout.app')

@section('content')
	<div class="container" >
		<div class="col-md-12" >
			<div class="panel panel-default" >
				<div class="panel-heading" >Events Page - Create</div >

				<div class="panel-body" >
					<div class="col-md-12" >
						@include('layouts.partials.errors')

						{!! Form::open(['url'=>'/user/events/','method'=>'POST']) !!}
							@include('events.partials.form')
						{!! Form::close() !!}

					</div >
				</div >
			</div >
		</div >
	</div >


@endsection

@section('scripts')
	<script >
        $("#types").select2({
            placeholder: "Select the event's type",
            allowClear: true,
			{{--//data:toJSON(<?echo //$types?>)--}}
        });
	</script >
@endsection




