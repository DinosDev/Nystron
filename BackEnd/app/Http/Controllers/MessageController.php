<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->only("name", "lastName", "telephone", "email", "message");

        return $data;
    }
}
