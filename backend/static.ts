import { api } from "encore.dev/api";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { extname } from "path";

interface StaticRequest {
  path: string;
}

interface StaticResponse {
  content: string;
  contentType: string;
}

interface IndexResponse {
  html: string;
}

// Serves static assets from the frontend build
export const serveStatic = api<StaticRequest, StaticResponse>(
  { expose: true, method: "GET", path: "/assets/*path" },
  async (req) => {
    const filePath = join(process.cwd(), "frontend", "dist", "assets", req.path);
    
    if (!existsSync(filePath)) {
      throw new Error("File not found");
    }
    
    const content = readFileSync(filePath, "utf-8");
    const contentType = getContentType(filePath);
    
    return { content, contentType };
  }
);

// Serves the main index.html for SPA fallback
export const serveIndex = api<void, IndexResponse>(
  { expose: true, method: "GET", path: "/" },
  async () => {
    const indexPath = join(process.cwd(), "frontend", "dist", "index.html");
    
    if (!existsSync(indexPath)) {
      // Fallback HTML if build doesn't exist
      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumosonic - From Sound to Light</title>
  <meta name="description" content="Minimalist solutions. Maximum impact. Digital craftsmanship and excellence.">
  <style>
    body { margin: 0; padding: 0; background: #000; color: #fff; font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .message { text-align: center; }
    .logo { font-size: 2rem; font-weight: 300; margin-bottom: 1rem; }
    .subtitle { color: #22d3ee; margin-bottom: 2rem; }
  </style>
</head>
<body>
  <div class="message">
    <div class="logo">Lumosonic</div>
    <div class="subtitle">From Sound to Light</div>
    <p>Building something extraordinary...</p>
  </div>
</body>
</html>
      `.trim();
      
      return { html };
    }
    
    const html = readFileSync(indexPath, "utf-8");
    return { html };
  }
);

function getContentType(filePath: string): string {
  const ext = extname(filePath).toLowerCase();
  const contentTypes: Record<string, string> = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
  };
  
  return contentTypes[ext] || 'application/octet-stream';
}
