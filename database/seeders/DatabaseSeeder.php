<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProgramSeeder::class,
            NewsSeeder::class,
            TestimonialSeeder::class,
            EventSeeder::class,
            PartnerSeeder::class,
            ResourceSeeder::class,
            WebinarSeeder::class,
        ]);
    }
}
