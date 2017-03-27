<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 20/03/2017
 * Time: 13:51
 */ ?>

@extends('user.layout.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Profile</div>

                    <div class="panel-body">
                        <ul>
                            <li>
                                <a href="/user/profile/edit">Edit profile</a>
                            </li>
                            <li>
                                <a href="/user/profile/page/edit">Edit personal page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
