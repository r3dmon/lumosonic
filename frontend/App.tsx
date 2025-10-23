import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ExploreWork } from './components/ExploreWork';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'explore'>('home');

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#000000');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = '#000000';
      document.head.appendChild(meta);
    }

    const metaAppleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (metaAppleStatusBar) {
      metaAppleStatusBar.setAttribute('content', 'black-translucent');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'apple-mobile-web-app-status-bar-style';
      meta.content = 'black-translucent';
      document.head.appendChild(meta);
    }
  }, []);

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
