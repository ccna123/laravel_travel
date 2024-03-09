<?php

namespace Database\Factories;

use App\Http\Controllers\BookingController;
use App\Models\Booking;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{

    protected $model = Booking::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $destination = ["Tokyo", "Osaka", "Nagoya", "Okinawa", "Sapporo", "Nara"];
        $transportation = ["Train", "Plane", "Express bus", "Bullet train", "Train"];

        return [
            "code" => BookingController::generateTourCode(),
            "customer_name" => $this->faker->name,
            "customer_email" => $this->faker->email,
            "customer_address" => $this->faker->address,
            "customer_phone" => $this->faker->phoneNumber,
            "destination" => $this->faker->randomElement($destination),
            "number_of_stay" => $this->faker->numberBetween(1, 14),
            "number_of_people" =>  $this->faker->numberBetween(1, 14),
            "number_of_adult" =>  $this->faker->numberBetween(1, 14),
            "number_of_children" =>  $this->faker->numberBetween(1, 14),
            "transportation" => $this->faker->randomElement($transportation),
            "total" => $this->faker->randomFloat(2, 1000, 4000),

        ];
    }
}
