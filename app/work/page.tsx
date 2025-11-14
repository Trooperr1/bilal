import Work from '@/components/Work';

export const metadata = {
  title: 'Our Work - Jaff Studio',
  description: 'Explore our portfolio of award-winning projects and creative solutions.',
};

export default function WorkPage() {
  return (
    <main className="relative pt-24">
      <Work />
    </main>
  );
}
