import DynamicHomePage from '@/components/DynamicHomePage';

export default function Home() {
  // Move data fetching to client side to avoid server-side cookie issues
  return <DynamicHomePage projects={[]} />;
}


