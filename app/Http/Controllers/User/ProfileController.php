<?php

namespace App\Http\Controllers\User;

use App\DifferentBusiness;
use App\DifferentPerson;
use App\DifferentWorld;

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
        $this->middleware('user.profile')->except('choose_type','create_person','create_business', 'create_world');
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

    public function create_business()
    {
        $user = Auth::guard('user')->user();
        $business = new DifferentBusiness();
        $business->name = $user->name;
        $business->save();
        $business->user()->save($user);
        return view('user.profile.edit_business');
    }

    public function create_world()
    {
        $user = Auth::guard('user')->user();
        $business = new DifferentWorld();
        $business->name = $user->name;
        $business->save();
        $business->user()->save($user);
        return view('user.profile.edit_business');
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
                return view('user.profile.edit_business');
            case 'App\\DifferentWorld':
                return view('user.profile.edit_world');
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

    public function store_edit_business(Request $request)
    {
        $rules = array(
            'name' => 'required',
            'email' => 'required',
            'description' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'phone' => 'required',
            'web' => 'required',
            'how_different' => 'required'
        );

        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return Redirect::to('/user/profile/edit')
                ->withErrors($validator)
                ->withInput($request->input());
        }
        $business = Auth::guard('user')->user()->type;
        $business->name = $request->input('name');
        $business->email = $request->input('email');
        $business->description = $request->input('description');
        $business->address = $request->input('address');
        $business->city = $request->input('city');
        $business->state = $request->input('state');
        $business->zip = $request->input('zip');
        $business->phone = $request->input('phone');
        $business->web = $request->input('web');
        $business->how_different = $request->input('how_different');
        $business->save();
        return Redirect::to('/user/profile/edit')
            ->with('success', 'Profile updated');
    }

    public function store_edit_world(Request $request)
    {
        $rules = array(
            'name' => 'required',
            'email' => 'required',
            'description' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'phone' => 'required',
            'web' => 'required',
            'how_different' => 'required'
        );

        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return Redirect::to('/user/profile/edit')
                ->withErrors($validator)
                ->withInput($request->input());
        }
        $business = Auth::guard('user')->user()->type;
        $business->name = $request->input('name');
        $business->email = $request->input('email');
        $business->description = $request->input('description');
        $business->address = $request->input('address');
        $business->city = $request->input('city');
        $business->state = $request->input('state');
        $business->zip = $request->input('zip');
        $business->phone = $request->input('phone');
        $business->web = $request->input('web');
        $business->how_different = $request->input('how_different');
        $business->save();
        return Redirect::to('/user/profile/edit')
            ->with('success', 'Profile updated');
    }


    public function store_edit(Request $request)
    {


        switch (Auth::guard('user')->user()->type_type) {
            case 'App\\DifferentPerson':
                return $this->store_edit_person($request);


            case 'App\\DifferentBusiness':
                return $this->store_edit_business($request);
            case 'App\\DifferentWorld':
                return $this->store_edit_world($request);
            default:
                return "1";
        }


    }

}
