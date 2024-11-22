<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;

class UserController extends Controller
{
    public function update(UpdateUserRequest $request)
    {
        $id = $request->route()->parameter("id");

        $user = User::find($id)->update(["name" => $request->name]);

        return response()->json(["success" => true, "message" => "Usuário atualizado com sucesso!", "return" => ["user" => $user]], 200);
    }
}
