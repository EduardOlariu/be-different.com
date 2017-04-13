<?php
/**
 * Created by PhpStorm.
 * User: eduardolariu
 * Date: 13/04/2017
 * Time: 13:27
 */
?>

<!-- Profile Picture -->

<div class="form-group">
    <div class="col-md-12">
        {!! Form::label('profile_picture','Profile Picture:') !!}
    </div>
    <div class="col-md-2"></div>
    <div class="col-md-3">
        @if($different->profile_picture!=null)
            <a href="{{"/uploads/user/different_profiles/$different->profile_picture"}}" data-lity>
                {{HTML::image("/uploads/user/different_profiles/$different->profile_picture",'Be different Profile Picture',['class'=>'profile_picture preview'])}}
            </a>
        @else
            {{HTML::image("/uploads/anonym.jpg",'Be different Profile Picture',['class'=>'profile_picture preview'])}}
        @endif
    </div>
    <!-- profile_picture Form Input-->
    <div class="form-group col-md-offset">
        {!! Form::file('profile_picture',old('profile_picture'),['class'=> 'form-control']) !!}
    </div>

</div>

<!-- /Profile Picture -->
