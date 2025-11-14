import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us - Jaff Studio',
  description: 'Get in touch with us to discuss your next project.',
};

export default function ContactPage() {
  return (
    <main className="relative pt-24">
      <Contact />
    </main>
  );
}
