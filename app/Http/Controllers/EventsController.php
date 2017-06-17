<?php

namespace App\Http\Controllers;

//remaining user -> verify if can make event


use App\Event;
use App\Http\Requests\EventRequest;
use App\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function compact;
use Illuminate\Support\Facades\Redirect;
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
	
    
    /**
     * Store a newly created resource in storage.
     *
     * @param EventRequest|Request $request
     * @return \Illuminate\Http\Response
     */
	public function store(EventRequest $request)
	{
		
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
		if (Auth::guard('user')->user()->id==$event->user->id) {
			
			$types = Type::all();
			return view('events.edit', compact('event', 'types'));
		}
		return Redirect::to('/user/events');
	}
	
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request $request
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function update(EventRequest $request, Event $event)
	{
		if (Auth::guard('user')->user()->id==$event->user->id) {
			$event->update($request->all());
			return back();
		}
		return Redirect::to('/user/events');
	}
	
	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Event $event
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Event $event)
	{
		$event->delete();
	}
}
