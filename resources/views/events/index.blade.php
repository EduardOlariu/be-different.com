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
				<div class="panel-heading" >Events Page</div >

				<div class="panel-body" >
					@foreach($events as $event)
						@include('events.partials.event')
						{{--<a href="/user/events/{{$event->id}}" ><li >{{$event->name}}</li ></a >--}}
					@endforeach
				</div >
			</div >
		</div >
	</div >


@endsection


