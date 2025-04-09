# Next.js Boilerplate

This is a [Next.js](https://nextjs.org) boilerplate project designed for hackathons, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It comes with a pre-configured dashboard, projects API, and modern UI components to help you build your hackathon project faster.

## Features

- 📊 **Dashboard Layout** - Ready-to-use dashboard with analytics and settings pages
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🚀 **Projects API** - Basic API structure for managing projects
- 📱 **Responsive Design** - Mobile-first approach for all components
- 🌗 **Dark Mode** - Built-in dark mode support with next-themes
- 🔧 **TypeScript** - Full TypeScript support for better development experience
- ⚡ **Turbopack** - Faster development with Next.js Turbopack
- 🧩 **Latest React** - Built with React 19 and Next.js 15

## Getting Started

First, install the dependencies:

```bash
bun install  # Recommended: Faster installation with Bun
# or
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
bun dev      # Recommended: Faster execution with Bun
# or
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   ├── dashboard/            # Dashboard pages
│   │   ├── analytics/        # Analytics dashboard
│   │   └── settings/         # Settings pages
│   ├── projects/             # Projects pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── ui/                   # UI components (shadcn/ui)
│   ├── layout/               # Layout components
│   ├── theme-provider.tsx    # Theme provider component
│   └── mode-toggle.tsx       # Dark/light mode toggle
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Static assets
└── types/                    # TypeScript type definitions
```

Check out [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed information about the project organization and development workflow.

## Available Scripts

Using Bun (recommended for better performance):

- `bun dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

Alternative package managers (npm/yarn/pnpm) are also supported.

## Technologies

This boilerplate includes:

- **Next.js 15** - The React framework with App Router
- **React 19** - The latest version of React
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **TypeScript** - For type safety and better developer experience
- **next-themes** - Theme management for dark/light mode

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Re-usable components built with Radix UI and Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
