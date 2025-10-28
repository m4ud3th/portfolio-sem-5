# Professional Portfolio

This is a portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Use it to showcase your web projects.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view your site.

## Features
- Next.js App Router
- TypeScript (TSX)
- Tailwind CSS styling
- ESLint for code quality

## Customization
Replace the placeholder content in the `src/app` directory with your own portfolio projects and information.

# Professional Portfolio with Supabase

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase for authentication and data management.

## Features

- 🎨 Modern, responsive design with band-inspired aesthetics
- 🔐 Authentication system (login/signup)
- 📊 Admin dashboard for project management
- 🗃️ Database integration with Supabase
- ✨ Dynamic project display with CRUD operations
- 🔒 Row Level Security (RLS) for data protection
- 📱 Mobile-responsive design

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel (recommended)

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd professional-portfolio
npm install
```

### 2. Set up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Copy your project URL and anon key from Project Settings > API
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set up Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `supabase/schema.sql`
3. Run the query to create tables and set up Row Level Security

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Database Schema

### Tables

- **profiles**: User profile information
- **projects**: Portfolio projects with images, descriptions, and links

### Row Level Security

- Users can only manage their own projects
- Public read access for displaying projects
- Secure authentication with automatic profile creation

## Usage

### Viewing the Portfolio

- Visit the homepage to see featured projects
- Projects are displayed dynamically from the database
- Falls back to static content if database isn't connected

### Admin Features

1. **Sign Up**: Create an account at `/auth/signup`
2. **Sign In**: Login at `/auth/login`
3. **Admin Dashboard**: Access at `/admin` (requires authentication)
4. **Manage Projects**: Add, edit, delete projects from the admin panel

### Project Management

In the admin dashboard, you can:
- ✅ Create new projects
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ Mark projects as featured
- ✅ Add technologies, links, and descriptions

## File Structure

```
src/
├── app/
│   ├── admin/           # Admin dashboard
│   ├── auth/            # Authentication pages
│   └── page.tsx         # Homepage
├── components/
│   ├── AdminDashboard.tsx
│   └── DynamicHomePage.tsx
├── lib/
│   ├── actions/         # Database operations
│   ├── supabase/        # Supabase client configuration
│   └── types/           # TypeScript type definitions
└── middleware.ts        # Authentication middleware
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `NEXT_PUBLIC_SITE_URL` | Your site URL (for redirects) |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## Customization

### Styling

- Colors are defined in Tailwind classes
- Main color scheme: black, purple (#6a5cff), and grays
- Modify `src/app/globals.css` for global styles

### Content

- Update hero section content in `DynamicHomePage.tsx`
- Modify contact information and email
- Add your own project images to `public/images/`

## Development

### Adding New Features

1. Database changes: Update `supabase/schema.sql`
2. TypeScript types: Update `src/lib/types/database.types.ts`
3. New pages: Add to `src/app/`
4. Components: Add to `src/components/`

### Database Operations

Use the functions in `src/lib/actions/` for:
- Project CRUD operations
- User authentication
- Profile management

## Troubleshooting

### Common Issues

1. **Database connection errors**: Check environment variables
2. **Authentication not working**: Verify Supabase URL and keys
3. **TypeScript errors**: Run `npm run build` to check for issues

### Getting Help

- Check Supabase documentation for database issues
- Next.js documentation for framework questions
- Open an issue in the repository for bugs

## License

This project is open source and available under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
