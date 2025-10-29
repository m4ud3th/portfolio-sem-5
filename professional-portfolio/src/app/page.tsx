import { Suspense } from 'react';
import { getFeaturedProjects } from '@/lib/actions/projects';
import DynamicHomePage from '@/components/DynamicHomePage';
import type { Database } from '@/lib/types/database.types';

// Force dynamic rendering since we're using Supabase with cookies
export const dynamic = 'force-dynamic';

type Project = Database['public']['Tables']['projects']['Row'];

export default async function Home() {
  // Fetch featured projects, but don't fail if database isn't set up yet
  let projects: Project[] = [];
  try {
    projects = await getFeaturedProjects();
  } catch (error) {
    console.log('Database not connected yet, using static data', error);
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <DynamicHomePage projects={projects} />
    </Suspense>
  );
}


