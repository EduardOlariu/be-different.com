<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 20/03/2017
 * Time: 13:51
 */?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Profile</div>

                    <div class="panel-body">
                        <h3 class="col-md-12">Choose where you want to register:</h3>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <a href="{{ url('/user/profile/') }}"
                               onclick="event.preventDefault();
                                                 document.getElementById('person-form').submit();">

                            <div class="circle-border zoom-in thumbnail animated fadeInDown">
                                    <img class="img-circle" src="/images/Different/different1.jpg" alt="service 1">
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <a href="{{ url('/user/profile/') }}"
                               onclick="event.preventDefault();
                                                 document.getElementById('business-form').submit();">
                                <div class="circle-border zoom-in thumbnail animated fadeInDown">
                                    <img class="img-circle" src="/images/Different/different2.jpg" alt="service 1">
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <a href="{{ url('/user/profile/') }}"
                               onclick="event.preventDefault();
                                                 document.getElementById('world-form').submit();">
                                <div class="circle-border zoom-in thumbnail animated fadeInDown">
                                    <img class="img-circle" src="/images/Different/different3.jpg" alt="service 1">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <form id="person-form" action="{{ url('/user/profile/person') }}" method="POST"
          style="display: none;">
        {{ csrf_field() }}
    </form>

    <form id="business-form" action="{{ url('/user/profile/business') }}" method="POST"
          style="display: none;">
        {{ csrf_field() }}
    </form>

    <form id="world-form" action="{{ url('/user/profile/world') }}" method="POST"
          style="display: none;">
        {{ csrf_field() }}
    </form>

@endsection


<a href="{{ url('/user/profile/') }}"
   onclick="event.preventDefault();
                                                 document.getElementById('-form').submit();">


<form id="logout-form" action="{{ url('/user/profile') }}" method="POST"
      style="display: none;">
    {{ csrf_field() }}
</form>


@section('scripts')

@endsection