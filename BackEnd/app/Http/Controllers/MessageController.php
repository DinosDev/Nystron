<?php

namespace App\Http\Controllers;

class MessageController extends Controller
{
    public function store()
    {
        //Store The Data
        return response()->json(['text' => 'Hello World']);
    }
}