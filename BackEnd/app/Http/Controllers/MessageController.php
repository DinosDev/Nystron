<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MessageModel;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            "name" => ["required", "max:50"],
            "lastName" => ["required", "max:100"],
            "telephone" => ["required", "max:21", 'regex:#^\+([0-9]{2,3})((\s\([0-9]{2}\)\s)|(\s))([0-9]{4,5})\s-\s([0-9]{4})$#'],
            "email" => ["required", "max:100", "email"],
            "message" => ["required", "max:1000"]
        ]);

        $response = MessageModel::create($data);

        return $response;
    }
}
