import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Analytics from '../components/home/Analytics';
import HowItWorks from '../components/home/HowItWorks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero />
        <Features />
        <Analytics />
        <HowItWorks />
      </main>
    </div>
  );
}
