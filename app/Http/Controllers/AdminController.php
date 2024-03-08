<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tours = Tour::orderBy("id", "desc")->get();
        return Inertia::render("Admin", compact('tours'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $data = $request->validate([
        //     "place_name_jp" => "required",
        //     "place_name_en" => "required",
        //     "price" => ["required", "numeric", "gt:0"],
        //     "location" => "required",
        //     "description" => "required",
        //     "departure_date" => "required",
        //     "image" => [Rule::notIn(["null"])],
        // ]);
        // $file = $request->file("image");
        // $fileName = $file->getClientOriginalName();
        // $file->move(public_path() . "/imgs", $fileName);
        // $data["image"] = $fileName;
        // Tour::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $tour = Tour::where("id", $id)->first();
            return response()->json([
                "tour" => $tour
            ]);
        } catch (\Throwable $th) {
            abort(404);
        }
    }

    public function edit(string $id)
    { {
            $tour = Tour::findOrFail($id);
            return Inertia::render("Edit", compact('tour'));
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        dd($request->toArray(), $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tour = Tour::findOrFail($id)->first();
        if ($tour) {
            $tour->destroy($id);
            $tour->save();
        } else {
            return redirect()->back();
        }
    }
}
