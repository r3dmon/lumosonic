# Lumosonic

A minimalist portfolio website showcasing digital craftsmanship and excellence with server-side rendering support.

## Features

- Modern, minimalist design
- Server-side rendering (SSR) for better SEO and performance
- Responsive layout
- Smooth animations
- Contact form
- Service showcase
- Client testimonials

## Tech Stack

- **Backend**: Encore.ts (TypeScript backend framework)
- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (frontend) + Encore Cloud (backend)

## Development

```bash
# Install dependencies
npm install

# Start backend development server
encore run

# Start frontend development server (in another terminal)
cd frontend
npm run dev
```

## Building

```bash
# Build frontend for production
cd frontend
npm run build

# This creates both client and server builds for SSR support
```

## Deployment

### Backend (Encore Cloud)

The backend is automatically deployed using Encore's deployment system:

```bash
# Deploy to staging
encore deploy --env=staging

# Deploy to production  
encore deploy --env=production
```

### Frontend (Cloudflare Pages)

The frontend is automatically deployed to Cloudflare Pages via GitHub Actions when changes are pushed to the main branch.

#### Setup

1. Create a Cloudflare Pages project
2. Add the following secrets to your GitHub repository:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

#### Manual Deployment

```bash
# Build the project
cd frontend
npm run build

# Deploy to Cloudflare Pages (requires Wrangler CLI)
npx wrangler pages publish dist/client --project-name=lumosonic
```

## Server-Side Rendering

The application supports SSR through the Encore.ts backend:

- **SSR Endpoint**: `/ssr/*path` - Renders pages server-side for better SEO
- **Static Assets**: `/assets/*path` - Serves built frontend assets
- **SPA Fallback**: `/` - Serves the main application for client-side routing

The SSR implementation provides:
- Better SEO with pre-rendered HTML
- Faster initial page loads
- Progressive enhancement
- Graceful fallback to client-side rendering

## Project Structure

```
├── backend/
│   ├── encore.service.ts  # Encore service definition
│   ├── ssr.ts            # Server-side rendering endpoint
│   └── static.ts         # Static asset serving
├── frontend/
│   ├── components/       # React components
│   ├── entry-client.tsx  # Client-side entry point
│   ├── entry-server.tsx  # Server-side entry point
│   ├── App.tsx          # Main app component
│   └── index.css        # Global styles
├── .github/
│   └── workflows/       # GitHub Actions
└── README.md
```

## License

MIT License
