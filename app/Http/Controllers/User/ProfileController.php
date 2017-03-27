<?php

namespace App\Http\Controllers\User;

use App\DifferentPerson;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{

    public function __construct()
    {
        $this->middleware('user');
        $this->middleware('user.profile')->except('choose_type','create_person');
    }

    public function index()
    {
//
//        if (Auth::guard('user')->check()) {
//            return '1';
//        }
//        return '0';

//        Auth::guard('user')->user()->type;
//        if (!Auth::guard('user')->user()->type)
//        return view('user.profile.choose_type');
////        return 0;
//        return Auth::guard('user')->user()->type->last_name;
//        return Auth::guard('user')->user()->name;
//        if (Auth::guard('user')->user()->userable_type == "")
//            return 0;
//        return 1;
//
//        return Auth::guard('user')->user()->userable_type;
        return view('user.profile.index');
    }


    public function choose_type()
    {

        return view('user.profile.choose_type');
    }

    public function create_person()
    {
        $user = Auth::guard('user')->user();
        $name = explode(" ", $user->name);
        $first_name = $name[0];
        $last_name = "";
        if (isset($name[1])) {
            $last_name = $name[1];
        }
        $dp = new DifferentPerson();
        $dp->first_name = $first_name;
        $dp->last_name = $last_name;
        $dp->save();
        $dp->user()->save($user);
        return view('user.profile.edit_person');
    }


    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|string
     */
    public function edit()
    {
        switch (Auth::guard('user')->user()->type_type) {
            case 'App\\DifferentPerson':
                return view('user.profile.edit_person');
            case 'App\\DifferentBusiness':
                return "difB";
            case 'App\\DifferentWorld':
                return "difW";
            default:
                return "1";

        }
    }
    public function store_edit_person(Request $request)
    {
        $rules = array(
            'first_name' => 'required',
            'last_name' => 'required'
        );
        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return Redirect::to('/user/profile/edit')
                ->withErrors($validator)
                ->withInput($request->input());
        }
        $dp = Auth::guard('user')->user()->type;
        $dp->first_name = $request->input('first_name');
        $dp->last_name = $request->input('last_name');
        $dp->save();
        return Redirect::to('/user/profile/edit')
            ->with('success', 'Profile updated');
    }


    public function store_edit(Request $request)
    {


        switch (Auth::guard('user')->user()->type_type) {
            case 'App\\DifferentPerson':
                return $this->store_edit_person($request);


            case 'App\\DifferentBusiness':
                return "difB";
            case 'App\\DifferentWorld':
                return "difW";
            default:
                return "1";
        }


    }

}
