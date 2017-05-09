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
				<div class="panel-heading" >{{$event->name}}</div >

				<div class="panel-body" >
					{{$event->body}}
				</div >
			</div >
		</div >
	</div >


@endsection


