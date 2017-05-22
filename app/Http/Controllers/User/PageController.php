<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Hesto\MultiAuth\Traits\LogsoutGuard;


class PageController extends Controller
{
    //
    //protected $guard='user';
    public function __construct()
    {
      $this->middleware('user');
      $this->middleware('user.profile')->except('welcome','index');
    }

    public function index()
    {
        return view('user.home')->with('success','');
    }
    
    public function welcome()
    {
        return view('user.welcome');
    }
}
