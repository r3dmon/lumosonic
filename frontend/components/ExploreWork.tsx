import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface ExploreWorkProps {
  onBack: () => void;
}

export function ExploreWork({ onBack }: ExploreWorkProps) {
  const pdfUrl = 'https://idealink.us/showcase/lumosonic.pdf';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // perform a client-side redirect to the PDF
      window.location.href = pdfUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Redirecting to Showcase PDF
        </h1>
        <p className="text-gray-300 mb-4">
          If you are not redirected automatically, click the link below to open the PDF.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all duration-200"
        >
          Open Showcase PDF
        </a>
        <div className="mt-6">
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-black/50 transition-all duration-300"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}          </div>
        </div>
      </main>
    </div>
  );
}
