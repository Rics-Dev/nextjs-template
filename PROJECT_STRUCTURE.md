# Next.js Boilerplate

This document outlines the organization of your Next.js project to help you navigate and develop efficiently during your hackathon.

## Directory Structure

```
/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── [...]/            # API endpoints
│   ├── (auth)/               # Authentication related routes (grouped)
│   ├── dashboard/            # Dashboard pages
│   ├── features/             # Feature-specific pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── ui/                   # UI components (shadcn/ui)
│   ├── features/             # Feature-specific components
│   ├── layout/               # Layout components
│   └── shared/               # Shared components
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions and libraries
│   ├── utils.ts              # General utilities
│   └── api.ts                # API utilities
├── types/                    # TypeScript type definitions
├── styles/                   # Additional styles
├── public/                   # Static assets
└── config/                   # Configuration files
```

## Key Concepts

### App Router

This project uses Next.js App Router with the `/app` directory. Each folder represents a route segment, and `page.tsx` files define the UI for that route.

### Components Organization

- **UI Components**: Basic UI elements from shadcn/ui
- **Feature Components**: Components specific to features
- **Layout Components**: Components for page layouts
- **Shared Components**: Components used across multiple features

### Data Fetching

Use React Server Components for data fetching when possible. For client-side data fetching, consider using SWR or React Query.

### State Management

For simple state, use React's built-in useState and useContext. For more complex state, consider Zustand or Jotai.

### Styling

This project uses Tailwind CSS for styling. The shadcn/ui components are already set up with Tailwind.

## Development Workflow

1. Create new pages in the appropriate directories under `/app`
2. Add components to `/components` organized by their purpose
3. Add API routes under `/app/api`
4. Use hooks for reusable logic
5. Add type definitions in `/types`

Happy hacking!
