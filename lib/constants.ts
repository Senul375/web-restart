export const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Systems", href: "#systems" },
  { label: "Process", href: "#process" },
] as const;

export const hero = {
  eyebrow: "Revenue Infrastructure",
  title: "Revenue Is Being Lost Through Systems That Aren't Built to Scale.",
  subheadline:
    "We design and implement intelligent revenue systems that eliminate manual work, accelerate response times, and ensure no opportunity is missed.",
  primaryCta: "Get Demo",
  secondaryCta: "See How It Works",
  trustLine:
    "Built for modern B2B teams scaling beyond manual processes.",
} as const;

export const credibility = {
  heading:
    "Most Businesses Don't Have a Lead Problem — They Have a System Problem.",
  intro:
    "Revenue isn't lost at the top of the funnel — it's lost in how businesses handle, process, and respond to opportunities.",
  closing:
    "Businesses that scale rely on systems designed to capture, respond, qualify, and convert without delay.",
  cards: [
    {
      title: "Capture",
      body: "Inbound interest isn't structured. Leads arrive from multiple channels without a unified system.",
    },
    {
      title: "Response",
      body: "Delayed or inconsistent replies result in lost opportunities before they can be qualified.",
    },
    {
      title: "Qualification",
      body: "Time is wasted on low-value leads while high-intent prospects go unnoticed.",
    },
    {
      title: "Follow-Up",
      body: "Inconsistent follow-up causes missed revenue at the final stage of the process.",
    },
  ],
} as const;

export const systems = {
  heading: "Built as Systems — Not Services.",
  intro:
    "Each system is designed to eliminate inefficiencies, accelerate response, and ensure every opportunity is captured and converted.",
  cards: [
    {
      title: "Lead Capture System",
      body: "Centralises and structures inbound interest across all channels.",
      features: [
        "Unified intake",
        "Organised pipeline",
        "Full visibility",
      ],
    },
    {
      title: "Response & Qualification System",
      body: "Engages and filters leads in real time.",
      features: [
        "Instant response",
        "Smart qualification",
        "High-value prioritisation",
      ],
    },
    {
      title: "Follow-Up & Conversion System",
      body: "Maintains consistent communication and converts leads into booked calls.",
      features: [
        "Automated follow-ups",
        "Reduced drop-off",
        "Increased conversions",
      ],
    },
  ],
} as const;

export const demonstration = {
  heading: "What This Looks Like in Practice",
  intro:
    "A structured system that turns inbound interest into organised, qualified, and converted opportunities.",
  closing:
    "A predictable system where every opportunity is handled without manual effort.",
  steps: [
    "Lead comes in",
    "Captured instantly",
    "Immediate response sent",
    "Qualification completed",
    "Follow-up sequence begins",
    "Conversion achieved",
  ],
} as const;

export const process = {
  heading: "A Structured Approach to Implementation",
  intro:
    "A clear process designed to implement systems without disrupting your operations.",
  steps: [
    {
      num: "01",
      title: "Audit & Strategy",
      body: "We map your current setup and identify where revenue is being lost.",
    },
    {
      num: "02",
      title: "System Design",
      body: "A custom system is designed around your business structure and goals.",
    },
    {
      num: "03",
      title: "Implementation",
      body: "The system is built and integrated into your existing workflow.",
    },
    {
      num: "04",
      title: "Optimisation",
      body: "Ongoing monitoring and refinement to maximise performance.",
    },
  ],
} as const;

export const offer = {
  heading: "Designed for Businesses Serious About Growth",
  intro:
    "Each system is custom-built based on your business structure and revenue goals.",
  cardTitle: "Custom Revenue System",
  cardBody:
    "End-to-end design and implementation of a tailored revenue system.",
  includesLabel: "Includes",
  includes: [
    "Lead capture",
    "Response & qualification",
    "Follow-up & conversion",
    "Full integration",
  ],
  pricingLine: "Custom pricing based on system complexity",
  addon: "+ Ongoing Optimisation available",
  cta: "Request a Demo",
} as const;

export const finalCta = {
  heading: "See What This Could Look Like for Your Business",
  body: "Every business is different. We'll show you how a structured system would work for your setup.",
  cta: "Apply to Work Together",
  subtext: "Limited availability for new projects.",
} as const;

export const footer = {
  copyright: "© 2025 SNC. All rights reserved.",
} as const;

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-base";
