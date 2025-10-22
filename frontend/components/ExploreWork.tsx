import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExploreWorkProps {
  onBack: () => void;
}

export function ExploreWork({ onBack }: ExploreWorkProps) {
  const pdfUrl = '/api/showcase/pdf';

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-black/50 transition-all duration-300"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            Our Showcase
          </h1>
        </div>
      </header>

      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                className="w-full h-[calc(100vh-160px)] min-h-[600px]"
                title="Showcase Portfolio"
              />
            ) : (
              <div className="flex items-center justify-center h-[calc(100vh-160px)] min-h-[600px]">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-gray-400">Loading showcase...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
