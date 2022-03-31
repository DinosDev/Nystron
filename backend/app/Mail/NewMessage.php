<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NewMessage extends Mailable
{
    use Queueable, SerializesModels;

    public string $Name;
    public string $LastName;
    public string $Telephone;
    public string $Email;
    public string $Message;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($Name, $LastName, $Telephone, $Email, $Message)
    {
        $this->Name = $Name;
        $this->LastName = $LastName;
        $this->Telephone = $Telephone;
        $this->Email = $Email;
        $this->Message = $Message;
    }

    static public function SendMail($Values)
    {
        $Mails = ["Bilhalba", "Erick"];

        foreach ($Mails as $Value) {
            $Mail = new NewMessage(
                $Values["name"],
                $Values["lastName"],
                $Values["telephone"],
                $Values["email"],
                $Values["message"],
            );

            $Mail->subject("Nova Mensagem");

            $MaiAddress = strtolower($Value) . "@bilhalba.com.br";

            $User = (object)[
                "email" => $MaiAddress,
                "name" => $Value
            ];

            $MailResponse = Mail::to($User)->send($Mail);

            if ($MailResponse !== NULL) return false;
            else continue;
        }

        return true;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mail.NewMessage');
    }
}
