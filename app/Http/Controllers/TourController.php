<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $minPrice = $request->input('minPrice');
        $maxPrice = $request->input('maxPrice');
        $tours = Tour::query()
            ->when($request->filled('searchTour'), function ($query) use ($request) {
                $tourName = $request->input('searchTour');
                $query->where('place_name_en', 'like', "%{$tourName}%");
            })->when($request->filled('filterDate'), function ($query) use ($request) {
                $filterDate = $request->input('filterDate');
                $query->where('departure_date', 'like', "%{$filterDate}%");
            })->when($minPrice && $maxPrice, function ($query) use ($minPrice, $maxPrice) {
                $query->whereBetween('price', [$minPrice, $maxPrice]);
            })
            ->paginate(3)
            ->withQueryString()
            ->through(fn ($tour) => [
                "id" => $tour->id,
                "departure_date" => $tour->departure_date,
                "img" => $tour->image,
                "place_name_en" => $tour->place_name_en,
                "place_name_jp" => $tour->place_name_jp,
                "price" => $tour->price
            ]);
        // dump($request->toArray());

        return Inertia::render("Home", [
            "tours" => $tours,
            "filter" => $request->input('searchTour')
        ]);
    }

    public function searchPage()
    {
        return Inertia::render("Search");
    }

    public function searchTour(Request $request)
    {
        try {
            $tour = Booking::where('code', $request["searchInput"])->first();
            return Inertia::render("Search", compact('tour'));
        } catch (\Throwable $th) {
            abort(404);
        }
    }
}
