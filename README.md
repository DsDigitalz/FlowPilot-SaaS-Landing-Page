# FlowPilot — SaaS Landing Page

A modern, high-performance landing page for FlowPilot, a next-generation project management platform powered by AI. Built with Next.js 16, React 19, Framer Motion, and Tailwind CSS.

##  Overview

FlowPilot is a comprehensive workspace solution that brings together:

- **AI Assistant** - Automatically generate tasks, summarize meetings, suggest deadlines
- **Kanban Boards** - Drag-and-drop task management with custom workflows
- **Team Collaboration** - Real-time comments, mentions, file uploads, and presence
- **Time Tracking** - Built-in timers, productivity reports, and billable hour tracking
- **Analytics Dashboard** - Team velocity, completion rates, burndown charts
- **Smart Automation** - Recurring tasks, triggers, approvals, and notifications
- **100+ Integrations** - One-click connects with Slack, GitHub, Figma, Jira, and more

**Trusted by 50,000+ teams** worldwide with 99.9% uptime and 5M+ tasks completed.

##  Features

### Page Sections

- **Hero** - Compelling headline with CTA and trust indicators
- **Trust Section** - Featured companies (Spotify, Airbnb, Stripe, etc.)
- **Features** - Six core features with icons and descriptions
- **Showcase** - Product demonstration section
- **Benefits** - Key value propositions
- **How It Works** - Three-step onboarding process
- **Integrations** - Marquee carousel with 12+ integration logos
- **AI Section** - AI capabilities highlight
- **Testimonials** - 6 customer testimonials with ratings
- **Pricing** - Three pricing tiers (Starter, Pro, Enterprise)
- **FAQ** - Accordion with 8 frequently asked questions
- **Final CTA** - Bottom-of-page conversion funnel

### Design Features

- **Dark/Light Theme** - System preference detection with local storage
- **Smooth Animations** - Framer Motion scroll and entrance effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance** - Optimized fonts (Inter, Plus Jakarta Sans), lazy loading
- **Real Brand Logos** - 12 integration logos with authentic branding

##  Tech Stack

| Category       | Technology                                           |
| -------------- | ---------------------------------------------------- |
| **Framework**  | Next.js 16.2.10 (App Router)                         |
| **Runtime**    | React 19.2.4                                         |
| **Styling**    | Tailwind CSS 4 + PostCSS                             |
| **Animation**  | Framer Motion 12.42.2                                |
| **Icons**      | Lucide React 1.23.0                                  |
| **Language**   | TypeScript 5                                         |
| **Fonts**      | Next.js Font Optimization (Inter, Plus Jakarta Sans) |
| **Linting**    | ESLint 9                                             |
| **Deployment** | Vercel                                               |

##  Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata & theme
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global Tailwind styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer with links
│   ├── sections/            # Page sections (12 components)
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Integrations.tsx # Logo carousel
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── ...
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── SectionTitle.tsx
│       ├── Accordion.tsx
│       ├── IntegrationLogos.tsx  # 12 SVG brand logos
│       └── ...
├── constants/
│   └── data.ts              # Content data (features, pricing, testimonials)
├── hooks/
│   └── useTheme.tsx         # Dark/light theme provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── vercel.json              # Vercel deployment config
├── eslint.config.mjs        # ESLint configuration
└── package.json             # Dependencies & scripts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or 20+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd saas-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   pnpm install
   bun install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-refresh as you edit files.

### Scripts

```bash
# Development
npm run dev              # Start dev server on :3000

# Production
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint checks
```

## 🎨 Customization

### Update Content

Edit [constants/data.ts](constants/data.ts) to modify:

- Navigation links
- Feature descriptions
- Pricing tiers
- Testimonials
- FAQ items
- Integration list

### Update Branding

- **Colors**: Modify Tailwind config or component inline styles
- **Fonts**: Change imports in [app/layout.tsx](app/layout.tsx)
- **Logo**: Replace brand assets in [public/](public/) folder
- **Metadata**: Update SEO in [app/layout.tsx](app/layout.tsx)

### Add/Modify Components

1. Create new component in `components/sections/` or `components/ui/`
2. Import in [app/page.tsx](app/page.tsx)
3. Add to page structure

## 🌍 Environment Setup

The project requires no environment variables for basic functionality. For analytics or third-party integrations, add to `.env.local`:

```env
# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_id_here

# Optional: API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📦 Build & Deployment

### Local Production Build

```bash
npm run build
npm run start
```

### Deploy to Vercel
deployment_url = https://flow-pilot-saa-s-landing-page-kfni.vercel.app/







