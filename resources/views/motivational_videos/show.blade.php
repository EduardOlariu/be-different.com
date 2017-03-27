<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 24/03/2017
 * Time: 11:49
 */?>

@extends('admin.layout.app')
<?php
header('X-Frame-Options: GOFORIT');
?>
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <div class="panel panel-default">
                    <div class="panel-heading">Motivational Videos - {{$motivationalVideo->name}}</div>

                    <div class="panel-body">

                        {{--//https://www.youtube.com/watch?v=0zGcUoRlhmw--}}
                        <iframe  src="{{ $motivationalVideo->link }}" frameborder="0" allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
