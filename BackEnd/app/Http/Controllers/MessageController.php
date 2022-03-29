<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\MessageModel;

class MessageController extends Controller
{
    public function store(MessageRequest $request)
    {
        $RequestValues = $request->only(['name', 'lastName', 'telephone', 'email', 'message']);

        return MessageModel::createValue($RequestValues);
    }
}
