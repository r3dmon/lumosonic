import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ExploreWork } from './components/ExploreWork';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'explore'>('home');

  if (currentPage === 'explore') {
    return <ExploreWork onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onExploreClick={() => setCurrentPage('explore')} />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
