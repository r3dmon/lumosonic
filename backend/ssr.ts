import { api } from "encore.dev/api";
import { readFileSync } from "fs";
import { join } from "path";

interface SSRRequest {
  path: string;
}

interface SSRResponse {
  html: string;
}

// Serves the SSR HTML for the frontend application
export const renderPage = api<SSRRequest, SSRResponse>(
  { expose: true, method: "GET", path: "/ssr/*path" },
  async (req) => {
    // In a real SSR implementation, you would:
    // 1. Parse the requested path
    // 2. Fetch any required data
    // 3. Render the React components server-side
    // 4. Return the complete HTML
    
    // For now, we'll return a basic HTML template
    // This would be replaced with actual React SSR rendering
    const html = generateHTML(req.path);
    
    return { html };
  }
);

function generateHTML(path: string): string {
  // This is a simplified version - in production you'd use React's renderToString
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumosonic - From Sound to Light</title>
  <meta name="description" content="Minimalist solutions. Maximum impact. Digital craftsmanship and excellence.">
  <meta property="og:title" content="Lumosonic - From Sound to Light">
  <meta property="og:description" content="Minimalist solutions. Maximum impact. Digital craftsmanship and excellence.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; background: #000; color: #fff; font-family: 'Inter', sans-serif; }
    .loading { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .spinner { width: 32px; height: 32px; border: 2px solid #22d3ee; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div id="root">
    <div class="loading">
      <div class="spinner"></div>
    </div>
  </div>
  <script type="module" src="/assets/index.js"></script>
</body>
</html>
  `.trim();
}
