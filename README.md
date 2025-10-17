# Lumosonic

A modern, minimalist software company website built with React, Vite, and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [Bun](https://bun.sh/) (latest version)
- [Docker](https://www.docker.com/) (optional, for containerized development)

## Development

### Local Development (Recommended)

1. Install dependencies:
   ```bash
   cd frontend
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Development

1. Build the Docker image:
   ```bash
   docker build -t lumosonic .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 lumosonic
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run type-check` - Run TypeScript type checking

## Project Structure

```
.
├── frontend/              # Frontend application
│   ├── components/       # React components
│   ├── public/          # Static assets
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── package.json    # Frontend dependencies
├── .github/             # GitHub configuration
├── cloudflare.toml     # Cloudflare Pages configuration
├── Dockerfile          # Docker configuration
└── README.md          # Project documentation
```

## Deployment

The application is automatically deployed to Cloudflare Pages when changes are pushed to the main branch.

### Build Process

1. The build command `cd frontend && bun run build` is executed
2. The output directory `frontend/dist` is deployed
3. Environment variables are injected based on the deployment environment

### Environment Variables

- `VITE_API_URL` - API endpoint URL
  - Production: `https://api.lumosonic.com`
  - Staging: `https://api-staging.lumosonic.com`

### Manual Deployment

1. Build the application:
   ```bash
   cd frontend
   bun run build
   ```

2. Deploy to Cloudflare Pages:
   - Go to Cloudflare Dashboard
   - Navigate to Pages
   - Select your project
   - Click "Deploy"

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[MIT](LICENSE) 