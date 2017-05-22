<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 10/05/2017
 * Time: 11:07
 */ ?>

<div class="blog-post" >
    <a href="/user/events/{{$event->id}}" >
        <h2 class="blog-post-title" >{{$event->name}}</h2 >
    </a >
    <p class="blog-post-meta" >{{$event->created_at->diffForHumans()}} by <a
                href="#" >{{$event->user->type->first_name}} {{$event->user->type->last_name}}</a ></p >

</div >