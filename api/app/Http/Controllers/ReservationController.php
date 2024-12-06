<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Reservation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function get(Request $request): JsonResponse
    {
        $query = Reservation::query();

        if ($request->filled('customer_id')) {
            $query->where('customer_id', $request->input('customer_id'));
        }

        $results = $query->get();

        return response()->json($results);
    }

    public function create(Request $request): JsonResponse 
    {
        $reservation = Reservation::create($request->all());

        return response()->json($reservation);
    }
}
