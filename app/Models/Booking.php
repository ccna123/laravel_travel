<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        "code",
        "customer_name",
        "customer_address",
        "customer_email",
        "customer_phone",
        "destination",
        "number_of_stay",
        "number_of_people",
        "number_of_adult",
        "number_of_children",
        "transportation",
        "total"
    ];
}
