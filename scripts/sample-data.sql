-- Sample data for TYCC database
USE tycc_db;

-- Insert sample programs
INSERT INTO programs (title, description, category, duration, participants, icon, status) VALUES
('Youth Business Incubator', 'A comprehensive 6-month program that provides young entrepreneurs with mentorship, funding opportunities, and business development support to transform innovative ideas into viable businesses.', 'Incubation', '6 months', 150, 'lightbulb', 'active'),
('Digital Skills for Entrepreneurs', 'Equipping young business owners with essential digital marketing, e-commerce, and technology skills needed to thrive in the modern business landscape.', 'Digital Skills', '3 months', 200, 'laptop', 'active'),
('Women in Business Track', 'A specialized program designed to empower young women entrepreneurs with leadership skills, networking opportunities, and access to women-focused funding initiatives.', 'Women Empowerment', '4 months', 120, 'users', 'active'),
('Youth Business Summit', 'An annual flagship event bringing together young entrepreneurs, investors, and industry leaders for networking, knowledge sharing, and partnership opportunities.', 'Events', '3 days', 500, 'calendar', 'active'),
('AfCFTA Access Program', 'Preparing young entrepreneurs to leverage opportunities within the African Continental Free Trade Area through market research, trade facilitation, and cross-border business development.', 'Trade', '5 months', 80, 'globe', 'active');

-- Insert sample news articles
INSERT INTO news (title, excerpt, content, category, date, image, slug, author, status) VALUES
('TYCC Launches New Digital Innovation Hub', 'A state-of-the-art facility equipped with modern technology to support young entrepreneurs in developing digital solutions for local and regional markets.', 'The Tanzania Youth Chamber of Commerce has officially launched its Digital Innovation Hub, a cutting-edge facility designed to nurture the next generation of tech entrepreneurs. The hub features modern workspaces, high-speed internet, 3D printing capabilities, and access to mentorship from industry experts.', 'Innovation', '2024-01-20', '/placeholder.svg?height=300&width=500', 'tycc-launches-digital-innovation-hub', 'TYCC Communications Team', 'published'),
('50 Young Entrepreneurs Graduate from Business Incubator', 'The latest cohort of the Youth Business Incubator program celebrates successful completion, with 80% of participants launching viable businesses.', 'In a ceremony held at the Dar es Salaam Convention Centre, 50 young entrepreneurs graduated from TYCC\'s flagship Youth Business Incubator program. The graduates represent diverse sectors including agriculture, technology, manufacturing, and services.', 'Programs', '2024-01-18', '/placeholder.svg?height=300&width=500', '50-entrepreneurs-graduate-business-incubator', 'Sarah Johnson', 'published'),
('Partnership with African Development Bank Announced', 'TYCC signs MOU with AfDB to provide $2M in funding support for youth-led businesses across Tanzania over the next three years.', 'The Tanzania Youth Chamber of Commerce has entered into a strategic partnership with the African Development Bank to enhance access to finance for young entrepreneurs. This partnership will provide crucial funding and technical assistance to promising youth-led businesses.', 'Partnerships', '2024-01-15', '/placeholder.svg?height=300&width=500', 'partnership-african-development-bank', 'Michael Temba', 'published'),
('Women in Business Track Records 95% Success Rate', 'The specialized program for women entrepreneurs achieves remarkable results with participants reporting significant business growth and expansion.', 'TYCC\'s Women in Business Track has achieved a 95% success rate, with participants reporting an average revenue increase of 250% within six months of program completion. The program has become a model for women\'s entrepreneurship development across East Africa.', 'Women Empowerment', '2024-01-12', '/placeholder.svg?height=300&width=500', 'women-business-track-success-rate', 'Grace Mwangi', 'published'),
('Annual Youth Business Summit 2024 Registration Opens', 'Join 500+ young entrepreneurs, investors, and industry leaders at Tanzania\'s premier youth business event scheduled for March 15-17, 2024.', 'Registration is now open for the Annual Youth Business Summit 2024, TYCC\'s flagship event that brings together the brightest minds in youth entrepreneurship. The summit will feature keynote speakers, panel discussions, pitch competitions, and networking opportunities.', 'Events', '2024-01-10', '/placeholder.svg?height=300&width=500', 'youth-business-summit-2024-registration', 'David Mwalimu', 'published');

-- Insert sample testimonials
INSERT INTO testimonials (name, role, company, testimonial, avatar, rating, status) VALUES
('Amina Hassan', 'Founder & CEO', 'TechSolutions Tanzania', 'TYCC\'s Youth Business Incubator transformed my tech startup idea into a thriving business. The mentorship and networking opportunities were invaluable in securing our first major clients.', '/placeholder.svg?height=100&width=100', 5, 'active'),
('John Mwalimu', 'Co-founder', 'GreenAgri Innovations', 'The Digital Skills program equipped me with the knowledge to scale my agricultural business online. Within 6 months, we increased our revenue by 300% through e-commerce platforms.', '/placeholder.svg?height=100&width=100', 5, 'active'),
('Grace Kimaro', 'Managing Director', 'Kimaro Fashion House', 'The Women in Business Track gave me the confidence and skills to expand my fashion business across East Africa. The support network I built continues to be instrumental in my success.', '/placeholder.svg?height=100&width=100', 5, 'active'),
('David Mollel', 'Founder', 'EduTech Africa', 'TYCC\'s programs opened doors I never knew existed. The connections I made at the Youth Business Summit led to partnerships that transformed my education technology startup.', '/placeholder.svg?height=100&width=100', 5, 'active'),
('Fatuma Said', 'Export Manager', 'Spice Route Trading', 'The AfCFTA Access Program prepared my spice trading business for continental expansion. We now export to 8 African countries, thanks to the market insights and trade facilitation support.', '/placeholder.svg?height=100&width=100', 5, 'active');

-- Insert sample partners
INSERT INTO partners (name, logo, website, description, category, status) VALUES
('African Development Bank', '/placeholder.svg?height=80&width=200', 'https://afdb.org', 'Leading development finance institution in Africa', 'Financial Institution', 'active'),
('UNDP Tanzania', '/placeholder.svg?height=80&width=200', 'https://undp.org', 'United Nations Development Programme Tanzania', 'International Organization', 'active'),
('Tanzania Chamber of Commerce', '/placeholder.svg?height=80&width=200', 'https://tccia.com', 'National chamber of commerce', 'Business Association', 'active'),
('Mastercard Foundation', '/placeholder.svg?height=80&width=200', 'https://mastercardfdn.org', 'Global foundation focused on advancing learning and promoting financial inclusion', 'Foundation', 'active'),
('World Bank Group', '/placeholder.svg?height=80&width=200', 'https://worldbank.org', 'International financial institution', 'Financial Institution', 'active'),
('USAID Tanzania', '/placeholder.svg?height=80&width=200', 'https://usaid.gov', 'United States Agency for International Development', 'Government Agency', 'active');

-- Insert sample admin user (password should be hashed in real application)
INSERT INTO users (username, email, password_hash, role, status) VALUES
('admin', 'admin@tycc.or.tz', '$2b$10$example_hash_here', 'admin', 'active'),
('editor', 'editor@tycc.or.tz', '$2b$10$example_hash_here', 'editor', 'active');
