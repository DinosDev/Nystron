<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

class MessageModel extends Model
{
    protected $table = 'messages';

    protected $fillable = [
        "name", "lastName", "telephone", "email", "message"
    ];

    static public function createValue(array $Values): array
    {
        DB::beginTransaction();

        try {
            self::create($Values);
            DB::commit();

            return [
                "Status Code" => "201",
                "Type" => "Success",
                "Message" => "Mensagem Enviada."
            ];
        } catch (QueryException) {
            DB::rollBack();

            return [
                "Status Code" => "500",
                "Type" => "Error",
                "Message" => "Erro ao enviar mensagem."
            ];
        }
    }
}
