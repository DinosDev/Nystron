<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MessageModel extends Model
{
    protected $table = 'messages';

    protected $fillable = [
        "name", "lastName", "telephone", "email", "message"
    ];
}
