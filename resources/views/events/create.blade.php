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
					<!-- Name Form Input -->
						<div class="form-group col-md-12" >
							{!! Form::label('name','Name:') !!}
							{!! Form::text('name',old('name'),['class'=> 'form-control','required'=>'required']) !!}
						</div >


						<!-- Body Form Input -->
						<div class="form-group col-md-12" >
							{!! Form::label('body','Body:') !!}
							{!! Form::textarea('body',old('body'),['class'=> 'form-control','required'=>'required']) !!}
						</div >

						<!-- type Form Input -->
						<div class="form-group col-md-12" >
							{!! Form::label('type','Type:') !!}
							<select name="type" id="types" class="form-control" >
								<option value="selected" selected disabled >Select the event's type</option >
								@foreach($types as $type)

									<option value="{{$type->id}}" >{{$type->name}}</option >
								@endforeach
							</select >
							{{--{!! Form::select('type',array_merge([''=>'Please select'],$types),null,['id'=> 'types','class'=> 'form-control']) !!}--}}
						</div >

						<!-- send Form Input-->
						<div class="form-group col-md-12" >
							{!! Form::submit('send',['class' => 'btn btn-primary form-control']) !!}
						</div >
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




