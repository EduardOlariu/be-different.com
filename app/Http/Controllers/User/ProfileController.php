<?php

namespace App\Http\Controllers\User;

use App\DifferentBusiness;
use App\DifferentPerson;
use App\DifferentWorld;
use App\Http\Controllers\Controller;
use App\PersonalPage;
use App\Traits\MySQLTraits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use function compact;

class ProfileController extends Controller
{
    use MySQLTraits;


    public function __construct()
    {
        $this->middleware('user');

        $this->middleware('user.profile')->except('choose_type', 'create_person', 'create_business', 'create_world');

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
        if (Auth::guard('user')->user()->type != null) {
            return Redirect::to('/user/profile/edit')
                ->with('danger', 'You already chose your profile type!');
        }
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
        $different = new DifferentPerson();
        $different->first_name = $first_name;
        $different->last_name = $last_name;
        $different->save();
        $different->user()->save($user);
        return view('user.profile.edit_person', compact('different'));
    }

    public function create_business()
    {
        $user = Auth::guard('user')->user();
        $different = new DifferentBusiness();
        $different->name = $user->name;
        $different->save();
        $different->user()->save($user);
        return view('user.profile.edit_business', compact('different'));
    }

    public function create_world()
    {
        $user = Auth::guard('user')->user();
        $different = new DifferentWorld();
        $different->name = $user->name;
        $different->save();
        $different->user()->save($user);
        return view('user.profile.edit_business', compact('different'));
    }


    public function reset()
    {
        $user = Auth::guard('user')->user();
        if ($user->hasRole('Inactive')) {
            $different = $user->type();

            $user->type_type = null;
            $user->type_id = null;
            $different->delete();
            return \redirect('/user/profile/choose_type')
                ->with('danger', 'Profile was reset!');
        }
        return \redirect('/user/profile/edit')
            ->with('error', 'You cannot reset your profile!');

    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View|string
     */
    public function edit()
    {
        $user = Auth::guard('user')->user();
        $different = $user->type;
        switch ($user->type_type) {
            case 'App\\DifferentPerson':
                return view('user.profile.edit_person', compact('different'));
            case 'App\\DifferentBusiness':
                return view('user.profile.edit_business', compact('different'));
            case 'App\\DifferentWorld':
                return view('user.profile.edit_world', compact('different'));
            default:
                return Redirect::back()
                    ->with('danger', 'An error occured!');

        }
    }



    public function store_edit_person(Request $request)
    {
        $user = Auth::guard('user')->user();
        $rules = [
            'profile_picture' => 'mimes:jpeg,bmp,png,jpg',//mimes:jpeg,bmp,png and for max size max:10000
            'first_name' => 'required',
            'last_name' => 'required',
            'birth_date' => 'required|date|date_format:Y-m-d',
            'gender' => 'required',
            'country' => 'required',
            'city' => 'required',
            'about_you' => 'required',
            'how_different' => 'required'

        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return Redirect::to('/user/profile/edit')
                ->withErrors($validator)
                ->withInput($request->all());
        }
        $different = Auth::guard('user')->user()->type;
        $this->storeDifferentProfilePicture($request, $user);
        $different->fill($request->input());

        return view('user.profile.edit_person', compact('different'))
            ->with('success', 'Profile updated');


    }


    public
    function store_edit_business(Request $request)
    {
        $rules = array(
            'profile_picture' => 'mimes:jpeg,bmp,png,jpg',//mimes:jpeg,bmp,png and for max size max:10000
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
        $user = Auth::guard('user')->user();
        $this->storeDifferentProfilePicture($request, $user);
        $different = $user->type;


        $different->fill($request->input());

        return view('user.profile.edit_business', compact('different'))
            ->with('success', 'Profile updated');


    }

    public
    function store_edit_world(Request $request)
    {


        $rules = array(
            'profile_picture' => 'mimes:jpeg,bmp,png,jpg',//mimes:jpeg,bmp,png and for max size max:10000
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


        $user = Auth::guard('user')->user();
        $this->storeDifferentProfilePicture($request, $user);
        $different = $user->type;
        $different->fill($request->input());

        return view('user.profile.edit_world', compact('different'))
            ->with('success', 'Profile updated');

    }


    public function store_edit(Request $request)
    {
//        return $request->file('profile_picture');
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

    /**
     * --------------------------------------------------------------------------------------------------------
     *                                          Edit personal page
     * --------------------------------------------------------------------------------------------------------
     */

    public
    function edit_page()
    {
        $user = Auth::guard('user')->user();
        if (!$user->personalPage) {
            $personalPage = new PersonalPage();
            $personalPage->profile_picture = "Default Profile Picture";
            $personalPage->short_description = "Default Profile Picture";
            $personalPage->description = "Default Profile Picture";
            $user->personalPage()->save($personalPage);
        } else {
            $personalPage = $user->personalPage;
//            return $personalPage;
        }
        return view('user.personal_page.edit', compact('personalPage'));

    }


//    private function upload_image(){
//
//    }

    public
    function upload_picture(Request $request, $user)
    {

    }

    public
    function store_edit_page(Request $request)
    {

//        dd($request);
//        return $request->input('profile_picture');
//        return Input::file('profile_picture');

        $user = Auth::guard('user')->user();
//        return $this->upload_image($request, $user);
//        return "ba a mers!";
        $personalPage = $user->personalPage;
//        $file = ['image' => Input::file('image')];
//        return $request->file('profile_picture');
        //$request->file('image');
        $profile_picture = ['profile_picture' => $request->file('profile_picture')];
        //return $profile_picture;
        $rules = ['profile_picture' => 'required|mimes:jpeg,bmp,png,jpg',]; //mimes:jpeg,bmp,png and for max size max:10000

        $validator = Validator::make($profile_picture, $rules);

        if ($validator->fails()) {
            return Redirect::back()->withInput()->withErrors($validator);
        }

        if (Input::file('profile_picture')->isValid()) {
            $rules = [
                //$profile_picture => 'required|mime:jpeg,jpg,png,bmp',
                'short_description' => 'required',
                'description' => 'required'
            ];
            $validator = Validator::make($request->input(), $rules);
            if ($validator->fails()) {
                return Redirect::to('/user/profile/page/edit')
                    ->withErrors($validator)
                    ->withInput($request->input());
            }

            $personalPage->short_description = $request->input('short_description');
            $personalPage->description = $request->input('description');


            $destinationPath = 'uploads/user/profile_image'; // upload path
            $extension = $request->file('profile_picture')->getClientOriginalExtension();
//            $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
            $fileName = $user->id . '.' . $extension; // renameing image
            Input::file('profile_picture')->move($destinationPath, $fileName); // uploading file to given path
            // sending back with message
            $personalPage->profile_picture = $fileName;
            $personalPage->save();
            return Redirect::to('/user/profile/page/edit')
                ->with('success', 'Profile page updated');
        } else {
            // sending back with error message.
            return Redirect::to('/user/profile/test_image')
                ->with('error', 'uploaded file is not valid');

        }


    }


    public
    function test_image()
    {
        return view('user.profile.person');
    }

    public
    function upload_image(Request $request)
    {
        return $request->file('image');
        return Input::file('image');

        $file = ['image' => Input::file('image')];
        // setting up rules
        $rules = ['image' => 'required|mimes:jpeg,bmp,png,jpg',]; //mimes:jpeg,bmp,png and for max size max:10000
        // doing the validation, passing post data, rules and the messages
        $validator = Validator::make($file, $rules);
        if ($validator->fails()) {
            // send back to the page with the input data and errors
            return Redirect::to('/user/profile/test_image')->withInput()->withErrors($validator);
        } else {
            // checking file is valid.
            if (Input::file('image')->isValid()) {
                $destinationPath = 'uploads'; // upload path
                $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
                $fileName = rand(11111, 99999) . '.' . $extension; // renameing image
                Input::file('image')->move($destinationPath, $fileName); // uploading file to given path
                // sending back with message

                return Redirect::to('/user/profile/test_image')
                    ->with('success', 'Upload successfully');
            } else {
                // sending back with error message.
                return Redirect::to('/user/profile/test_image')
                    ->with('error', 'uploaded file is not valid');

            }
        }
    }




    /**
     * ==============================================================================================================
     * ====================================   useful functions    ===================================================
     * ==============================================================================================================
     */

    /**
     * @param Request $request
     * @param $user
     * @return string
     */
    public function storeDifferentProfilePicture(Request $request, $user)
    {
        if ($request->file('profile_picture') != null) {
            if ($request->file('profile_picture')->isValid()) {
                $destinationPath = 'uploads/user/different_profiles'; // upload path
                $extension = $request->file('profile_picture')->getClientOriginalExtension();
//            $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
                $type = explode('\\', $user->type_type);
                $fileName = $user->id . $type[1] . '.' . $extension; // renameing image
                $request->file('profile_picture')->move($destinationPath, $fileName);
                $user->type->profile_picture = $fileName;
                $user->type->save();
            } else {
                return Redirect::back()->withInput($request->all());
            }
        }


    }



}
