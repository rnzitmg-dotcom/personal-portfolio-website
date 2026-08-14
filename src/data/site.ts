import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Cpu,
  Gauge,
  Globe2,
  Handshake,
  Lightbulb,
  LineChart,
  Megaphone,
  MessageSquareText,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "ClickForge",
  owner: "Ranjit Tamang",
  role: "AI Marketing Expert & Consultant",
  email: "digitalgeni65@gmail.com",
  phone: "+977 9841441002",
  location: "Pharping, Kathmandu, Nepal",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://clickforge.ai",
  description:
    "ClickForge helps ambitious businesses grow with AI-powered marketing strategy, automation, SEO, branding, and performance campaigns.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    icon: BrainCircuit,
    description:
      "Build a practical AI roadmap that turns customer insight, automation, and analytics into measurable growth.",
    benefits: [
      "Sharper positioning",
      "Faster execution",
      "Better channel decisions",
    ],
    features: [
      "AI opportunity audit",
      "Customer journey mapping",
      "Campaign intelligence dashboard",
    ],
  },
  {
    slug: "marketing-consultation",
    title: "Marketing Consultation",
    icon: Handshake,
    description:
      "Get senior guidance on campaigns, funnels, tools, and messaging before you spend budget in the wrong places.",
    benefits: ["Clear priorities", "Reduced waste", "Confident decisions"],
    features: [
      "Growth diagnosis",
      "Channel recommendations",
      "Monthly advisory sessions",
    ],
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    icon: Search,
    description:
      "Improve discoverability with technical SEO, search-led content, and conversion-focused landing pages.",
    benefits: [
      "More qualified traffic",
      "Stronger authority",
      "Compounding visibility",
    ],
    features: ["Technical audit", "Keyword strategy", "Content optimization"],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    icon: MessageSquareText,
    description:
      "Create useful, credible content systems that build trust and move prospects from awareness to action.",
    benefits: ["Consistent publishing", "Clear expertise", "Reusable assets"],
    features: [
      "Editorial planning",
      "AI-assisted briefs",
      "Thought leadership content",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Turn social channels into a repeatable engine for audience growth, brand recall, and lead generation.",
    benefits: [
      "Better engagement",
      "Platform-fit messaging",
      "Community momentum",
    ],
    features: [
      "Content calendars",
      "Creative direction",
      "Performance reporting",
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    icon: Gauge,
    description:
      "Launch and optimize paid campaigns with tighter targeting, stronger offers, and disciplined measurement.",
    benefits: [
      "Lower acquisition waste",
      "Better conversion rates",
      "Transparent ROI",
    ],
    features: ["Ad funnel design", "A/B testing", "Budget optimization"],
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    icon: Sparkles,
    description:
      "Shape a distinctive identity, voice, and market story that customers remember and competitors cannot copy.",
    benefits: [
      "Sharper differentiation",
      "Premium perception",
      "Message consistency",
    ],
    features: ["Brand positioning", "Voice system", "Offer architecture"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    icon: Target,
    description:
      "Create conversion paths that attract, qualify, and nurture prospects into consultation-ready opportunities.",
    benefits: [
      "More sales conversations",
      "Higher lead quality",
      "Cleaner follow-up",
    ],
    features: ["Lead magnets", "Landing pages", "Nurture sequences"],
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    icon: Workflow,
    description:
      "Automate repetitive marketing work while preserving a personal, human customer experience.",
    benefits: ["Saved time", "Faster response", "Reliable follow-through"],
    features: ["CRM workflows", "Email automation", "AI response routing"],
  },
  {
    slug: "digital-growth-strategy",
    title: "Digital Growth Strategy",
    icon: Rocket,
    description:
      "Connect brand, demand, analytics, and operations into one focused plan for sustainable digital growth.",
    benefits: ["Aligned teams", "Clear scorecards", "Scalable execution"],
    features: ["Growth roadmap", "Funnel analytics", "Experiment backlog"],
  },
];

export const featuredServices = services.slice(0, 6);

export const whyChoose = [
  {
    title: "AI Expertise",
    icon: Bot,
    text: "Practical AI adoption without hype, confusion, or tool overload.",
  },
  {
    title: "Data Driven Strategy",
    icon: BarChart3,
    text: "Decisions are guided by customer signals, analytics, and business goals.",
  },
  {
    title: "Business Growth",
    icon: ChartNoAxesCombined,
    text: "Every recommendation connects to pipeline, revenue, or retention.",
  },
  {
    title: "Automation",
    icon: Cpu,
    text: "Repeatable systems reduce manual work and speed up execution.",
  },
  {
    title: "Creative Branding",
    icon: Lightbulb,
    text: "Strategy and creativity work together to make the brand memorable.",
  },
  {
    title: "ROI Focus",
    icon: LineChart,
    text: "Campaigns are measured against outcomes that matter to the business.",
  },
];

export const processSteps = [
  [
    "01",
    "Discovery",
    "Clarify goals, audience, constraints, and current marketing performance.",
  ],
  [
    "02",
    "Strategy",
    "Define positioning, channels, AI use cases, and measurable growth targets.",
  ],
  [
    "03",
    "Planning",
    "Create a practical roadmap with campaigns, automations, and reporting cadence.",
  ],
  [
    "04",
    "Execution",
    "Launch focused assets, workflows, content, and acquisition campaigns.",
  ],
  [
    "05",
    "Optimization",
    "Read the data, improve the funnel, and scale what performs.",
  ],
  [
    "06",
    "Growth",
    "Build durable systems that keep improving after the first wins.",
  ],
];

export const testimonials = [
  {
    name: "Aarav Shrestha",
    role: "Founder, SaaS Startup",
    quote:
      "Ranjit helped us turn scattered marketing ideas into a focused AI-powered growth plan. Within weeks, our lead quality and follow-up speed improved noticeably.",
  },
  {
    name: "Maya Gurung",
    role: "Director, Education Brand",
    quote:
      "ClickForge gave our brand a sharper message and a better content system. The strategy felt premium, practical, and easy for our team to execute.",
  },
  {
    name: "Samir Adhikari",
    role: "Ecommerce Operator",
    quote:
      "The performance marketing audit found budget leaks we had missed for months. The new structure made reporting clearer and campaigns more profitable.",
  },
];

export const stats = [
  ["48+", "Projects Completed"],
  ["32+", "Happy Clients"],
  ["91%", "Campaign Success Rate"],
  ["6+", "Years Experience"],
];

export const skills = [
  "AI Marketing",
  "SEO",
  "Performance Marketing",
  "Social Media",
  "Automation",
  "Brand Strategy",
  "Content Marketing",
  "Digital Consulting",
];

export const values = [
  "Clarity before complexity",
  "Human-first AI adoption",
  "Measurable business impact",
  "Premium brand thinking",
  "Fast learning loops",
  "Ethical growth systems",
];

export const blogs = [
  {
    slug: "ai-marketing-roadmap-for-small-businesses",
    title: "How to Build an AI Marketing Roadmap for a Growing Business",
    description:
      "A practical framework for choosing the right AI opportunities, channels, and automation priorities.",
    author: "Ranjit Tamang",
    date: "June 18, 2026",
    readingTime: "6 min read",
    category: "AI Strategy",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    content: [
      "AI marketing works best when it starts with a business problem, not a tool. The first step is to identify where speed, personalization, insight, or consistency would create the most leverage.",
      "Map the customer journey from discovery to purchase. Look for slow response times, unclear messaging, weak content coverage, and manual tasks that prevent the team from focusing on strategy.",
      "A strong roadmap should prioritize quick wins, measurable experiments, and systems that can become durable advantages over time.",
    ],
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search: What Still Matters",
    description:
      "AI search changes discovery, but strong technical foundations, authority, and useful content still win.",
    author: "Ranjit Tamang",
    date: "June 9, 2026",
    readingTime: "5 min read",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Search is becoming more conversational, but the fundamentals remain powerful. Brands need clear topical authority, trustworthy pages, and content that answers real buying questions.",
      "AI tools can accelerate research and drafting, but they cannot replace original insight, customer understanding, or strong editorial judgment.",
      "The best SEO programs now combine technical quality, expert-led content, and conversion-focused page design.",
    ],
  },
  {
    slug: "automation-without-losing-human-touch",
    title: "Marketing Automation Without Losing the Human Touch",
    description:
      "Automation should make customer experiences faster and more relevant, not colder or more generic.",
    author: "Ranjit Tamang",
    date: "May 28, 2026",
    readingTime: "7 min read",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Good automation removes friction. It helps teams respond faster, segment better, and follow up consistently while keeping the brand voice intact.",
      "Start with moments where customers already expect speed: consultation requests, downloads, onboarding, and abandoned inquiries.",
      "Use AI to assist with routing, summaries, and personalization, then keep human review in the places where trust matters most.",
    ],
  },
  {
    slug: "brand-positioning-for-ai-enabled-companies",
    title: "Brand Positioning for AI-Enabled Companies",
    description:
      "AI is not a positioning strategy by itself. Customers still need a clear reason to trust and choose you.",
    author: "Ranjit Tamang",
    date: "May 12, 2026",
    readingTime: "4 min read",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    content: [
      "Many companies describe themselves as AI-powered, but that phrase rarely explains the outcome customers receive. Strong positioning turns capability into a clear promise.",
      "Define who the brand serves, what painful problem it solves, and why its approach is meaningfully different.",
      "Once that foundation is clear, AI becomes a proof point instead of a vague buzzword.",
    ],
  },
];

export const faqs = [
  [
    "How soon can we start?",
    "Most consulting projects can begin within one to two weeks after the initial discovery call.",
  ],
  [
    "Do you work with international clients?",
    "Yes. ClickForge supports businesses in Nepal and global teams through remote consulting and execution support.",
  ],
  [
    "Can you implement automation tools?",
    "Yes. Strategy can include setup guidance, workflow planning, and hands-on implementation depending on scope.",
  ],
  [
    "Is pricing fixed?",
    "Pricing depends on the service mix, timeline, and level of execution support required.",
  ],
];

export const serviceOptions = services.map((service) => service.title);

export const categoryOptions = [
  "All",
  ...Array.from(new Set(blogs.map((blog) => blog.category))),
];

export const featureIcons = {
  CheckCircle2,
  BriefcaseBusiness,
  Globe2,
  Megaphone,
};
