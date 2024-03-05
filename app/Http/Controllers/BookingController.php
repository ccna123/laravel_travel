<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Tour;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{

    public static function generateTourCode()
    {
        $prefix = 'TOUR';
        $random_part = rand(1000, 9999);

        return $prefix . uniqid() . $random_part;
    }

    public function index(Request $request, $tourId)
    {
        try {
            $tour = Tour::where('id', $tourId)->first();
            return Inertia::render("Booking", compact('tour'));
        } catch (\Throwable $th) {
            abort(404);
        }
    }
    public function booking(Request $request)
    {
        $code = self::generateTourCode();
        $data = $request->validate([
            "customer_name" => "required",
            "customer_address" => "required",
            "customer_email" => "required|email|unique:bookings,customer_email",
            "customer_phone" => "required",
            "number_of_stay" => "required",
            "number_of_people" => "required",
            "number_of_adult" => "required",
            "number_of_children" => "required",
            "transportation" => "required",
        ]);
        $booking = Booking::create([
            "code" => $code,
            "customer_name" => $request["customer_name"],
            "customer_email" => $request["customer_email"],
            "customer_address" => $request["customer_address"],
            "customer_phone" => $request["customer_phone"],
            "number_of_stay" => $request["number_of_stay"],
            "number_of_people" => $request["number_of_people"],
            "number_of_adult"   => $request["number_of_adult"],
            "number_of_children" => $request["number_of_children"],
            "destination" => $request["destination"],
            "transportation" => $request["transportation"],
            "total" => $request["total"]
        ]);
        if ($booking) {
            return back();
        }
        return back();
    }
}
