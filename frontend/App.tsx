import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';

// Lazy load components for better performance
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

// Loading component for lazy-loaded sections
function SectionLoader() {
  return (
    <div className="py-32 bg-black flex items-center justify-center" role="status" aria-label="Loading section">
      <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-black px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>
      
      <header>
        <Hero />
      </header>
      
      <main id="main-content">
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
