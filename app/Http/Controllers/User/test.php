<?php




public function store_different_page(Request $request)
    {



    $user = Auth::guard('user')->user();
    $different = $user->different;
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
            //'short_description' => 'required',
            //'description' => 'required'
        ];
        $validator = Validator::make($request->input(), $rules);
        if ($validator->fails()) {
            return Redirect::to('/user/profile/page/edit')
                ->withErrors($validator)
                ->withInput($request->input());
        }


        $destinationPath = 'uploads/user/profile_image'; // upload path
        $extension = $request->file('profile_picture')->getClientOriginalExtension();
//            $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
        $fileName = $user->id . '.' . $extension; // renameing image
        Input::file('profile_picture')->move($destinationPath, $fileName); // uploading file to given path
        // sending back with message
        $different->profile_picture = $fileName;
        $different->save();
        return Redirect::to('/user/profile/page/edit')
            ->with('success', 'Profile page updated');
    }   else {
        // sending back with error message.
        return Redirect::to('/user/profile/test_image')
            ->with('error', 'uploaded file is not valid');

    }


}