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
		<div class="col-md-8" >
			<div class="panel panel-default" >
				<div class="panel-heading" >Event</div >

				<div class="panel-body" >
					<h1 >{{$event->name}}</h1 >
					<p class="blog-post-meta" >
						{{$event->user->name}} on {{$event->created_at->toFormattedDateString()}}
					</p >
					{{$event->body}}
					<hr >
					<div class="card" >
						<div class="comments card-block" >
							<h2 >Comments</h2 >
							@if (count($event->comments))
								<ul class="list-group" >
									@foreach($event->comments as $comment)
										<li class="list-group-item" >
											<strong >
												{{$comment->user->name}} -
												                         &nbsp; {{$comment->created_at->diffForHumans()}}
												                         : &nbsp;
											</strong >
											{{$comment->body}}
										</li >
									@endforeach
								</ul >
							@else
								No comment...
							@endif
							<hr >
							<div class="card " >
								<div class="card-block" >
								@include('layouts.partials.errors')
								{!! Form::open(['url'=>"/user/events/$event->id/comments",'method'=>'POST']) !!}


								<!-- Body Form Input -->
									<div class="form-group" >
										<input class="form-control" name="body" type="text"
										       placeholder="Your comment here"
										       id="body" required >
									</div >

									<!-- submit Form Input-->
									<div class="form-group" >
										{!! Form::submit('Add Comment',['class' => 'btn btn-primary']) !!}
									</div >


									{!! Form::close() !!}
								</div >
							</div >
						</div >
					</div >
				</div >
			</div >
		</div >
	</div >


@endsection


