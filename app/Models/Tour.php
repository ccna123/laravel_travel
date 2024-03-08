<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'place_name_jp',
        'place_name_en',
        'image',
        'departure_date',
        'price',
        'location',
        'description',
    ];
}
