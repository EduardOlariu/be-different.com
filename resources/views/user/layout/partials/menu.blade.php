<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 17/03/2017
 * Time: 10:38
 */
?>
<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/user') }}">
                {{--{{ config('app.name', 'Be different') }}: User--}}
                {{ HTML::image('images/logo/logo2.png','Be different',array('width'=>'125px','height'=>'33px') ) }}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                <li><a href="{{ url('/user/dashboard') }}">Dashboard</a></li>
                <li><a href="{{ url('/user/dashboard') }}">Wall</a></li>
                <li><a href="{{ url('/user/dashboard') }}">Events</a></li>
                <li><a href="{{ url('/user/dashboard') }}">Motivational videos</a></li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                @if (!Auth::guard('user')->check())
                    <li><a href="{{ url('/user/login') }}">Login</a></li>
                    <li><a href="{{ url('/user/register') }}">Register</a></li>
                @else
                    <li>
                        @if (empty($notification))
                            <i class="fa fa-envelope-open-o fa-2x icon-grey messages"></i>
                        @else
                            <i class="fa fa-envelope-o fa-2x icon-grey messages"></i>

                            <div class="fa-badge">100</div>
                        @endif
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::guard('user')->user()->name }} <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="{{ url('/user/profile') }}">
                                    Edit profile

                                </a>
                            </li>

                            <li>
                                <a href="{{ url('/user/logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    Logout
                                </a>

                                <form id="logout-form" action="{{ url('/user/logout') }}" method="POST"
                                      style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>

                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</nav>
