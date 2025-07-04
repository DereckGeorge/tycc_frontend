<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Partner;
use Carbon\Carbon;

class PartnerSeeder extends Seeder
{
    public function run()
    {
        $partners = [
            [
                'name' => 'African Development Bank',
                'logo' => 'partners/afdb-logo.png',
                'category' => 'Financial Institution',
                'description' => 'Leading development finance institution providing funding and technical assistance for youth entrepreneurship programs across Africa.',
                'partnership_details' => 'Strategic funding partner providing $2M over 3 years for youth business development initiatives. The partnership includes grants, loans, and technical assistance for promising youth-led businesses.',
                'website' => 'https://afdb.org',
                'partnership_since' => '2022',
                'partnership_type' => 'Strategic',
                'status' => 'active',
                'featured' => true,
                'contact_person' => 'Dr. Amina Kone',
                'contact_email' => 'partnerships@afdb.org',
                'services_provided' => json_encode(['Funding', 'Technical Assistance', 'Capacity Building', 'Policy Support']),
                'sectors_focus' => json_encode(['Agriculture', 'Technology', 'Renewable Energy', 'Manufacturing']),
                'created_at' => Carbon::parse('2022-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'UNDP Tanzania',
                'logo' => 'partners/undp-logo.png',
                'category' => 'International Organization',
                'description' => 'United Nations Development Programme supporting sustainable development and youth empowerment initiatives in Tanzania.',
                'partnership_details' => 'Collaborative programs on youth employment and sustainable development goals implementation. Focus on capacity building and policy development for youth entrepreneurship ecosystem.',
                'website' => 'https://undp.org/tanzania',
                'partnership_since' => '2021',
                'partnership_type' => 'Strategic',
                'status' => 'active',
                'featured' => true,
                'contact_person' => 'Sarah Johnson',
                'contact_email' => 'sarah.johnson@undp.org',
                'services_provided' => json_encode(['Technical Assistance', 'Capacity Building', 'Policy Support', 'Research']),
                'sectors_focus' => json_encode(['Youth Employment', 'Sustainable Development', 'Innovation', 'Gender Equality']),
                'created_at' => Carbon::parse('2021-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'Tanzania Chamber of Commerce',
                'logo' => 'partners/tccia-logo.png',
                'category' => 'Business Association',
                'description' => 'National chamber of commerce facilitating business development and trade promotion for Tanzanian businesses.',
                'partnership_details' => 'Joint advocacy and business development programs for young entrepreneurs. Collaboration on policy development and business environment improvement initiatives.',
                'website' => 'https://tccia.com',
                'partnership_since' => '2020',
                'partnership_type' => 'Strategic',
                'status' => 'active',
                'featured' => true,
                'contact_person' => 'John Mwalimu',
                'contact_email' => 'partnerships@tccia.com',
                'services_provided' => json_encode(['Business Development', 'Advocacy', 'Networking', 'Trade Promotion']),
                'sectors_focus' => json_encode(['Trade', 'Manufacturing', 'Services', 'Agriculture']),
                'created_at' => Carbon::parse('2020-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'Mastercard Foundation',
                'logo' => 'partners/mastercard-foundation-logo.png',
                'category' => 'Foundation',
                'description' => 'Global foundation focused on advancing learning and promoting financial inclusion for young people in Africa.',
                'partnership_details' => 'Financial inclusion and digital skills training programs for youth entrepreneurs. Support for digital payment solutions and financial literacy initiatives.',
                'website' => 'https://mastercardfdn.org',
                'partnership_since' => '2023',
                'partnership_type' => 'Implementation',
                'status' => 'active',
                'featured' => false,
                'contact_person' => 'Grace Kimaro',
                'contact_email' => 'grace.kimaro@mastercardfdn.org',
                'services_provided' => json_encode(['Financial Inclusion', 'Digital Skills', 'Scholarships', 'Mentorship']),
                'sectors_focus' => json_encode(['Fintech', 'Digital Skills', 'Financial Services', 'Education']),
                'created_at' => Carbon::parse('2023-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'World Bank Group',
                'logo' => 'partners/worldbank-logo.png',
                'category' => 'Financial Institution',
                'description' => 'International financial institution providing loans and grants for development projects worldwide.',
                'partnership_details' => 'Technical assistance and capacity building support for entrepreneurship programs. Focus on private sector development and job creation initiatives.',
                'website' => 'https://worldbank.org',
                'partnership_since' => '2022',
                'partnership_type' => 'Strategic',
                'status' => 'active',
                'featured' => false,
                'contact_person' => 'Michael Temba',
                'contact_email' => 'mtemba@worldbank.org',
                'services_provided' => json_encode(['Technical Assistance', 'Research', 'Policy Support', 'Capacity Building']),
                'sectors_focus' => json_encode(['Private Sector Development', 'Job Creation', 'Innovation', 'Infrastructure']),
                'created_at' => Carbon::parse('2022-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'USAID Tanzania',
                'logo' => 'partners/usaid-logo.png',
                'category' => 'Government Agency',
                'description' => 'United States Agency for International Development supporting economic growth initiatives in Tanzania.',
                'partnership_details' => 'Market access and trade facilitation programs for young entrepreneurs. Support for export development and international market entry strategies.',
                'website' => 'https://usaid.gov/tanzania',
                'partnership_since' => '2021',
                'partnership_type' => 'Implementation',
                'status' => 'active',
                'featured' => false,
                'contact_person' => 'David Mollel',
                'contact_email' => 'dmollel@usaid.gov',
                'services_provided' => json_encode(['Market Access', 'Trade Facilitation', 'Capacity Building', 'Technical Assistance']),
                'sectors_focus' => json_encode(['Trade', 'Export Development', 'Agriculture', 'Manufacturing']),
                'created_at' => Carbon::parse('2021-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'Vodacom Foundation',
                'logo' => 'partners/vodacom-foundation-logo.png',
                'category' => 'Corporate Foundation',
                'description' => 'Corporate foundation focused on digital inclusion and youth empowerment through technology.',
                'partnership_details' => 'Digital skills training and mobile technology solutions for young entrepreneurs. Support for digital literacy and mobile money adoption programs.',
                'website' => 'https://vodacom.co.tz/foundation',
                'partnership_since' => '2023',
                'partnership_type' => 'Corporate',
                'status' => 'active',
                'featured' => false,
                'contact_person' => 'Fatuma Said',
                'contact_email' => 'fatuma.said@vodacom.co.tz',
                'services_provided' => json_encode(['Digital Skills', 'Mobile Technology', 'Digital Literacy', 'Innovation Support']),
                'sectors_focus' => json_encode(['Digital Technology', 'Mobile Solutions', 'Fintech', 'Innovation']),
                'created_at' => Carbon::parse('2023-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
            [
                'name' => 'University of Dar es Salaam',
                'logo' => 'partners/udsm-logo.png',
                'category' => 'Academic Institution',
                'description' => 'Leading university in Tanzania supporting research and innovation in entrepreneurship development.',
                'partnership_details' => 'Research collaboration and student exchange programs. Joint development of entrepreneurship curriculum and innovation support for student startups.',
                'website' => 'https://udsm.ac.tz',
                'partnership_since' => '2020',
                'partnership_type' => 'Academic',
                'status' => 'active',
                'featured' => false,
                'contact_person' => 'Prof. Peter Mwanza',
                'contact_email' => 'pmwanza@udsm.ac.tz',
                'services_provided' => json_encode(['Research', 'Student Exchange', 'Curriculum Development', 'Innovation Support']),
                'sectors_focus' => json_encode(['Research', 'Innovation', 'Student Entrepreneurship', 'Technology Transfer']),
                'created_at' => Carbon::parse('2020-01-01'),
                'updated_at' => Carbon::parse('2024-01-01'),
            ],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
