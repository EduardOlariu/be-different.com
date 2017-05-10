<?php

namespace App\Http\Controllers;

//remaining user -> verify if can make event


use App\Event;
use App\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function compact;
use function redirect;
use function view;

class EventsController extends Controller
{
	
	public function __construct()
	{
		$this->middleware('user');
		$this->middleware('user.profile');
	}
	
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index()
	{
		$events = Event::latest()->get();
		return view('events.index', compact('events'));
	}
	
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		$types = Type::all();
		//return $types;
		return view('events.create', compact('types'));
	}
	
	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		
		$rules = [
			'name' => 'required',
			'body' => 'required|min:25',
			'type' => 'required|integer'
		];
		$this->validate(request(),$rules);
//		$validator = Validator::make($request->all(), $rules);
//		if ($validator->fails()) {
//			return back()->withErrors($validator)->withInput($request->input());
//		}
//	    $this->validate($request->all(),$rules);

//	    $event=Event::create(array_merge($request->all(),['user_id'=>Auth::guard('user')->user()->id]));
//	    $event->user_id=Auth::guard('user')->user()->id;
//	    $event->save();
		Auth::guard('user')->user()->publish_event(new Event($request->all()));
		
		return redirect('/user/events/')->with('success', 'Event created');
	}
	
	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function show(Event $event)
	{
		return view('events.show', compact('event'));
	}
	
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Event $event)
	{
		//
	}
	
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Event $event)
	{
		//
	}
	
	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Event $event)
	{
		//
	}
}
