<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 24/03/2017
 * Time: 11:49
 */ ?>

@extends('admin.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <div class="panel panel-default">
                    <div class="panel-heading">Motivational Videos</div>

                    <div class="panel-body">

                        @foreach($motivationalVideos as $motivationalVideo)
                            <div class="col-md-12">
                                <a href="/admin/motivational-videos/{{$motivationalVideo->slug}}">
                                    <div class="col-md-5">Preview</div>
                                    <div class="col-md-6">
                                        <div class="row">{{$motivationalVideo->name}}
                                        </div>
                                        <div class="row">{{$motivationalVideo->short_description}}</div>
                                    </div>
                                </a>


                                @if (Auth::guard('admin')->check())
                                    <div class="col-md-1 delete">

                                        <a href="{{ url("/admin/motivational-videos/") }}"
                                           onclick="ConfirmDelete()">
                                            <i
                                                    class="fa fa-minus-square" style="color: red"
                                                    aria-hidden="true"></i>
                                        </a>

                                        <form id="delete-form"
                                              action="/admin/motivational-videos/{{$motivationalVideo->slug}}/delete"
                                              onsubmit="" method="POST"
                                              style="display: none;">
                                            {{ csrf_field() }}
                                        </form>


                                        <a href="/admin/motivational-videos/{{$motivationalVideo->slug}}/delete"> </a>
                                    </div>
                                @endif
                            </div>

                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')

@endsection