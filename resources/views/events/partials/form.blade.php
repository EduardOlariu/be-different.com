<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 10/05/2017
 * Time: 15:09
 */?>
<!-- Name Form Input -->
<div class="form-group col-md-12" >
	{!! Form::label('name','Name:') !!}
	{!! Form::text('name',old('name'),['class'=> 'form-control']) !!}
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
{{--@section('scripts')--}}

{{--@endsection--}}
