<?php

namespace App\Http\Controllers;

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
                "img" => $tour->img,
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
