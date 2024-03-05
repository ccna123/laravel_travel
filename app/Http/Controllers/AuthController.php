<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render("Login");
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => 'required|email',
            "password" => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            sleep(2);
            return Inertia::render("LoginSuccess", [
                "username" => Auth::user()->name
            ]);
        }
        return back()->withErrors([
            "message" => "Invalid credentials"
        ]);
    }
}
