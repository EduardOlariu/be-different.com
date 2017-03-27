<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class MotivationalVideoController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin');
    }



    /**
     * View all movies
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $motivationalVideos = \App\MotivationalVideo::get();
        return view('motivational_videos.index',compact('motivationalVideos'));
    }


    /**
     * Show a Video by it's slug
     *
     * @param $motivationalVideo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show($motivationalVideo)
    {
        return view('motivational_videos.show',compact('motivationalVideo'));
    }


    /**
     * Show the form to edit Video stuff
     *
     * @param $motivationalVideo
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($motivationalVideo)
    {
        return view('motivational_videos.edit',compact('motivationalVideo'));
    }


    /**
     * Store changes to Video
     *
     * @param $motivationalVideo
     * @param Request $request
     */
    public function store($motivationalVideo, Request $request )
    {

        $input = array_map('trim', $request->all());


        $input['slug']= strtolower(str_replace(" ", "-", $request->input('slug')));
//        return $input;
        $rules = array(
            'name' => 'required',
            'description' => 'required|min:40',
            'short_description' => 'required|min:10|max:100',
            'slug' => 'required|min:5|max:100',
            'link' => 'required|min:5|max:200',
        );
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            return Redirect::back()
                ->withErrors($validator)
                ->withInput($input);
        }
        $motivationalVideo->name =$input['name'];
        $motivationalVideo->description =$input['description'];
        $motivationalVideo->short_description =$input['short_description'];
        $motivationalVideo->link =$input['link'];
        $motivationalVideo->slug =$input['slug'];
        $motivationalVideo->save();


        return Redirect::to('/admin/motivational-videos/'.$motivationalVideo->slug)
            ->with('success',$motivationalVideo->name.' info was changed');




    }


    public function delete($motivationalVideo)
    {
        return $motivationalVideo->name;
    }


}
