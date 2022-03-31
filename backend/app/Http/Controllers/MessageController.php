<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\MessageModel;
use App\Mail\NewMessage;

class MessageController extends Controller
{
    public function store(MessageRequest $request)
    {
        $RequestValues = $request->only(['name', 'lastName', 'telephone', 'email', 'message']);

        $Mail = NewMessage::SendMail($RequestValues);

        if ($Mail !== NULL) {
            return response()->json([
                "Status Code" => "500",
                "Type" => "Error",
                "Message" => "Erro ao enviar mensagem."
            ], 500);
        }

        return MessageModel::createValue($RequestValues);
    }
}
