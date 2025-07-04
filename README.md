# Tanzania Youth Chamber of Commerce (TYCC) Website

A modern, responsive website for the Tanzania Youth Chamber of Commerce built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with TYCC brand colors (Deep Green #007A3D and Gold #FFC20E)
- **Dynamic Content**: API-driven content management for programs, news, testimonials, and more
- **Contact Forms**: Functional contact and newsletter signup forms
- **SEO Optimized**: Built with Next.js for optimal search engine optimization
- **Performance**: Fast loading times with optimized images and code splitting

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Montserrat (headings), Lato (body text)
- **Database**: MySQL (schema provided)
- **API**: Next.js API routes with RESTful endpoints

## Project Structure

\`\`\`
tycc-website/
├── app/
│   ├── api/                 # API routes
│   │   ├── contact/
│   │   ├── news/
│   │   ├── newsletter/
│   │   ├── programs/
│   │   └── testimonials/
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── featured-programs.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── news-section.tsx
│   ├── partners-section.tsx
│   ├── stats-section.tsx
│   └── testimonials-section.tsx
├── scripts/                # Database scripts
│   ├── database-schema.sql
│   └── sample-data.sql
└── README.md
\`\`\`

## Pages

1. **Home** - Hero section, featured programs, stats, testimonials, news, partners
2. **About TYCC** - Organization information, vision, mission, values
3. **Programs** - Detailed program listings and information
4. **Resources** - Downloadable resources and materials
5. **News & Events** - Latest news articles and upcoming events
6. **Partnerships** - Partner organizations and collaboration opportunities
7. **Contact Us** - Contact form, office information, map

## Key Features

### Programs
- Youth Business Incubator
- Digital Skills for Entrepreneurs
- Women in Business Track
- Youth Business Summit
- AfCFTA Access Program

### Statistics (Animated)
- 1000+ Youth Members
- 5 Flagship Programs
- 30+ Training Events
- 50+ Partner Organizations

### API Endpoints

- `GET /api/programs` - Fetch all programs
- `POST /api/programs` - Create new program
- `GET /api/news` - Fetch news articles
- `POST /api/news` - Create news article
- `GET /api/testimonials` - Fetch testimonials
- `POST /api/testimonials` - Create testimonial
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Newsletter subscription

## Database Schema

The project includes a complete MySQL database schema with the following tables:
- `programs` - Program information
- `news` - News articles and events
- `testimonials` - User testimonials
- `contact_submissions` - Contact form submissions
- `newsletter_subscriptions` - Newsletter subscribers
- `partners` - Partner organizations
- `users` - Admin users

## Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd tycc-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file:
   \`\`\`
   DATABASE_URL=mysql://username:password@localhost:3306/tycc_db
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   \`\`\`

4. **Set up the database**
   - Create MySQL database using `scripts/database-schema.sql`
   - Insert sample data using `scripts/sample-data.sql`

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Customization

### Colors
Update the brand colors in `tailwind.config.ts` and `globals.css`:
- Primary: `#007A3D` (Deep Green)
- Secondary: `#FFC20E` (Gold)

### Content
- Update mock data in API routes (`app/api/*/route.ts`)
- Modify component content in respective component files
- Add new pages by creating files in the `app/` directory

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Custom components: `components/ui/` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: info@tycc.or.tz
- Phone: +255 123 456 789
- Website: https://tycc.or.tz

---

Built with ❤️ for Tanzania's Youth by the TYCC Development Team
# tycc_frontend
