<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RequestVerificationCodeRequest;
use App\Http\Requests\ConfirmVerificationCodeRequest;
use App\Models\User;
use App\Services\TwilioService;

class AuthController extends Controller
{
    public function requestVerificationCode(RequestVerificationCodeRequest $request)
    {
        try {
            $twilio = new TwilioService();
    
            $response = $twilio->sendVerificationCode($request->phone_number);

            if ($response && $response->status === "pending") {
                return response()->json(["success" => true, "message" => "Código de verificação enviado com sucesso para o número $request->phone_number."], 200);
            }
    
            return response()->json(["success" => false, "message" => "Falha ao enviar o código de verificação, tente novamente mais tarde."], 500);
        } catch (\Throwable $th) {
            return response()->json(["success" => false, "message" => "Ocorreu um erro interno no servidor."], 500);
        }
    }

    public function confirmVerificationCode(ConfirmVerificationCodeRequest $request)
    {
        try {
            $twilio = new TwilioService();
    
            $response = $twilio->checkVerificationCode($request->phone_number, $request->code);

            if ($response && $response->status === "approved") {

                $user = User::where("phone_number", $request->phone_number)->first();

                if (!$user) {
                    $user = User::create(["name" => "", "phone_number" => $request->phone_number]);
                }

                $token = $user->createToken('user-token')->plainTextToken;

                return response()->json(["success" => true, "message" => "Código de verificação validado com sucesso para o número $request->phone_number.", "return" => ["token" => $token, "user" => $user]], 200);
            }
    
            return response()->json(["success" => false, "message" => "Falha ao validar o código de verificação, tente novamente mais tarde."], 500);
        } catch (\Throwable $th) {
            return response()->json(["success" => false, "message" => "Ocorreu um erro interno no servidor."], 500);
        }
    }
}
