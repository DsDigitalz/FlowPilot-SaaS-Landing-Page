// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ─── Trust logos ──────────────────────────────────────────────────────────────
export const TRUST_LOGOS = [
  "Spotify", "Airbnb", "Stripe", "Notion", "Shopify", "Vercel", "GitHub", "Figma",
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "50K+", label: "Teams" },
  { value: "99.9%", label: "Uptime" },
  { value: "5M+", label: "Tasks Completed" },
  { value: "120+", label: "Countries" },
];

// ─── Features ─────────────────────────────────────────────────────────────────
export const FEATURES = [
  {
    icon: "Sparkles",
    title: "AI Assistant",
    description:
      "Generate tasks automatically, summarize meetings, suggest deadlines, and prioritize work—all powered by AI.",
    color: "#7c3aed",
  },
  {
    icon: "LayoutKanban",
    title: "Kanban Boards",
    description:
      "Drag-and-drop task management with status columns, labels, priorities, and fully custom workflows.",
    color: "#4f46e5",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    description:
      "Comments, mentions, shared workspaces, file uploads, and real-time presence indicators built in.",
    color: "#0891b2",
  },
  {
    icon: "Clock",
    title: "Time Tracking",
    description:
      "Start timers, generate weekly reports, view productivity charts, and manage billable hours effortlessly.",
    color: "#059669",
  },
  {
    icon: "BarChart3",
    title: "Analytics Dashboard",
    description:
      "Track velocity, completion rates, burndown charts, and team performance with beautiful insights.",
    color: "#d97706",
  },
  {
    icon: "Zap",
    title: "Smart Automation",
    description:
      "Create recurring tasks, set triggers, automate workflows, manage approvals, and send smart notifications.",
    color: "#dc2626",
  },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS = [
  "One unified workspace for everything",
  "AI saves your team hours every week",
  "Reduce planning meetings by 60%",
  "Increase team productivity by 3×",
  "Real-time collaboration, anywhere",
  "Unlimited integrations with any tool",
  "Enterprise-grade security & compliance",
  "Full offline support on all devices",
];

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Create Workspace",
    description: "Sign up in seconds, invite your teammates, and import existing projects from Jira, Notion, or CSV.",
    icon: "Building2",
  },
  {
    step: "02",
    title: "Plan Your Work",
    description: "Create tasks, organise boards, assign owners, set priorities, and let AI suggest your roadmap.",
    icon: "Layout",
  },
  {
    step: "03",
    title: "Ship Faster",
    description: "Track progress in real time, measure performance, automate repetitive workflows, and celebrate milestones.",
    icon: "Rocket",
  },
];

// ─── Integrations ─────────────────────────────────────────────────────────────
export const INTEGRATIONS = [
  { name: "Slack", color: "#4a154b" },
  { name: "GitHub", color: "#24292e" },
  { name: "Figma", color: "#f24e1e" },
  { name: "Notion", color: "#000000" },
  { name: "Google Drive", color: "#1967d2" },
  { name: "Jira", color: "#0052cc" },
  { name: "Discord", color: "#5865f2" },
  { name: "Zapier", color: "#ff4f00" },
  { name: "Teams", color: "#464eb8" },
  { name: "Dropbox", color: "#0061ff" },
  { name: "Zoom", color: "#2d8cff" },
  { name: "GitLab", color: "#fc6d26" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: "FlowPilot reduced our planning meetings by 60%. The AI summaries alone saved us 4 hours a week.",
    name: "Sarah Chen",
    role: "Head of Product",
    company: "Vercel",
    avatar: "SC",
    color: "#7c3aed",
    rating: 5,
  },
  {
    quote: "Our developers finally love project management. The kanban experience is the best I've ever used.",
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "Stripe",
    avatar: "MR",
    color: "#4f46e5",
    rating: 5,
  },
  {
    quote: "We ship 3× faster than with our old stack. FlowPilot made us a genuinely high-velocity team.",
    name: "Aisha Okonkwo",
    role: "CTO",
    company: "Shopify",
    avatar: "AO",
    color: "#0891b2",
    rating: 5,
  },
  {
    quote: "The AI deadline prediction feature caught a major slippage risk before it became a problem. Brilliant.",
    name: "James Kim",
    role: "VP Engineering",
    company: "Airbnb",
    avatar: "JK",
    color: "#059669",
    rating: 5,
  },
  {
    quote: "Migrating from Jira took 20 minutes. My team was productive on day one. Incredible onboarding.",
    name: "Priya Taneja",
    role: "Engineering Manager",
    company: "Figma",
    avatar: "PT",
    color: "#d97706",
    rating: 5,
  },
  {
    quote: "The analytics dashboard gives us visibility we never had before. We finally know how fast we actually move.",
    name: "Luca Moretti",
    role: "Product Lead",
    company: "Notion",
    avatar: "LM",
    color: "#dc2626",
    rating: 5,
  },
];


// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICING = [
  {
    name: "Starter",
    price: 0,
    period: "",
    description: "Perfect for individuals and side projects.",
    popular: false,
    cta: "Get Started Free",
    features: [
      "Up to 3 projects",
      "5 team members",
      "Basic kanban boards",
      "2GB storage",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: 19,
    period: "/month",
    description: "Everything growing teams need to ship faster.",
    popular: true,
    cta: "Start Free Trial",
    features: [
      "Unlimited projects",
      "Unlimited members",
      "AI assistant included",
      "Smart automations",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
    ],
  },
  {
    name: "Enterprise",
    price: null,
    period: "",
    description: "Security and control for large organisations.",
    popular: false,
    cta: "Talk to Sales",
    features: [
      "Everything in Pro",
      "Advanced permissions",
      "SSO & SAML",
      "Dedicated CSM",
      "Custom integrations",
      "SLA guarantee",
      "Unlimited storage",
    ],
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ = [
  {
    q: "Can I use FlowPilot for free?",
    a: "Yes. Our Starter plan is free forever with up to 3 projects and 5 team members. No credit card required.",
  },
  {
    q: "Does the AI assistant require an extra payment?",
    a: "No. AI features are included in all Pro and Enterprise plans. Starter users get limited AI access.",
  },
  {
    q: "Can I import my projects from Jira or Notion?",
    a: "Absolutely. We support one-click imports from Jira, Notion, Asana, Trello, Linear, and CSV files.",
  },
  {
    q: "Is there a public API?",
    a: "Yes. All Pro and Enterprise plans include full REST and GraphQL API access with comprehensive documentation.",
  },
  {
    q: "Can my whole team collaborate in real time?",
    a: "Yes. FlowPilot supports real-time cursors, live comments, presence indicators, and instant updates across all plans.",
  },
  {
    q: "How secure is my data?",
    a: "We use AES-256 encryption at rest, TLS 1.3 in transit, SOC 2 Type II compliance, and optional GDPR data residency.",
  },
];
