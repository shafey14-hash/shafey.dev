// Centralized configuration — edit this file to update all site content

export const PERSONAL = {
  name: 'Shafey Ali',
  title: 'Full-Stack Developer & AI Solutions Builder',
  university: 'Arid Agriculture University Rawalpindi',
  campus: 'Gujrat Campus (GIMS)',
  degree: 'Computer Science (Artificial Intelligence)',
  role: 'Full-Stack Developer & AI Solutions Builder',
  availability: 'Available for Client Projects',
  email: 'shafey8124@gmail.com',
  // Replace with your WhatsApp number in international format without '+' (e.g. 923001234567)
  whatsappNumber: '92XXXXXXXXXX',
  whatsappUrl: 'https://wa.me/92XXXXXXXXXX',
  github: 'https://github.com/shafey14-hash',
  linkedin: 'https://www.linkedin.com/in/shafey-ali-87218b2bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  siteUrl: 'https://shafeydev.vercel.app',
  formEndpoint: 'https://formsubmit.co/ajax/shafey8124@gmail.com',
  positioning:
    'I build modern websites, powerful full-stack applications, and AI-powered solutions that help businesses grow, automate operations, and turn ideas into reality.',
}

export const HERO = {
  badge: 'Available for Client Projects',
  headline: 'Turning Ideas Into Powerful Digital Products.',
  subheadline:
    'I build high-performance websites, full-stack applications, and AI-powered solutions that help businesses grow faster and work smarter.',
  primaryCta: "Let's Build Together",
  secondaryCta: 'Explore My Work',
}

export const PROJECTS = [
  {
    id: '01',
    title: 'SA Parties',
    category: 'E-Commerce | Full-Stack Development',
    description:
      'An online e-commerce platform for occasional, celebration, and party supplies, designed to give customers a smooth browsing and ordering experience.',
    problem:
      'Customers needed a convenient way to browse party supplies by category and place orders online, while the store needed a centralized way to manage products and incoming orders.',
    solution:
      'Built a dynamic full-stack e-commerce website with a structured product catalog, interactive shopping cart, database-driven ordering, and an admin dashboard for order and inventory management.',
    highlights: [
      'Dynamic product catalog',
      'Interactive shopping cart',
      'Database-driven ordering system',
      'Admin dashboard',
      'Order management workflow',
    ],
    url: 'https://sa-parties.vercel.app',
    githubUrl: null,
    cta: 'Visit Live Website',
    status: 'live',
    type: 'ecommerce',
    tech: ['React', 'Node.js', 'Supabase', 'JavaScript'],
    accent: '#c9a86c',
  },
  {
    id: '02',
    title: 'Little Chef Pizza',
    category: 'Restaurant Platform | Website + Mobile Application',
    description:
      'A digital ordering platform for a restaurant in Gujrat, Pakistan, combining a responsive restaurant website with a dedicated mobile application for online food ordering.',
    problem:
      'The restaurant needed a modern digital presence that lets customers browse the menu and place food orders online seamlessly across both desktop browsers and mobile devices.',
    solution:
      'Developed a responsive restaurant website alongside a dedicated mobile application, featuring an intuitive menu interface, online ordering flow, and a cohesive brand experience.',
    highlights: [
      'Responsive restaurant website',
      'Online food ordering interface',
      'Dedicated mobile application',
      'Menu browsing & order flow',
      'Cross-device user experience',
    ],
    url: 'https://little-chef-pizza.vercel.app',
    githubUrl: null,
    cta: 'Visit Live Website',
    status: 'live',
    type: 'restaurant',
    hasApp: true,
    tech: ['React', 'Next.js', 'Node.js', 'MySQL'],
    accent: '#e8572a',
  },
  {
    id: '03',
    title: 'Py Terminal',
    category: 'Online IDE | AI-Powered Development Tool',
    description:
      'A browser-based online integrated development environment supporting Python and C++ with an integrated Gemini-powered AI assistant to support the coding workflow.',
    problem:
      'Writing and testing code often requires local environment setup, and learners or developers benefit from contextual AI assistance directly inside their editor.',
    solution:
      'Building a browser-based coding environment with syntax-highlighted editing, an integrated terminal view, Python and C++ support, and a Gemini-powered AI assistant panel.',
    highlights: [
      'Browser-based code editor',
      'Python & C++ language support',
      'Integrated terminal interface',
      'Gemini-powered AI assistant',
      'AI-assisted coding workflow',
    ],
    url: null,
    githubUrl: null,
    cta: null,
    status: 'development',
    type: 'ide',
    tech: ['React', 'Python', 'C++', 'Gemini API'],
    accent: '#5b8def',
  },
]

export const SKILLS = {
  Frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
  Backend: ['Node.js'],
  Database: ['Supabase', 'MySQL'],
  'Programming & AI': ['Python', 'C++'],
}

export const SERVICES = [
  {
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Modern, responsive, high-performance websites for businesses — engineered for clarity, speed, and strong first impressions.',
  },
  {
    icon: 'ShoppingCart',
    title: 'E-Commerce Development',
    description:
      'Complete online stores with product management, ordering systems, and admin dashboards built to streamline your sales workflow.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack Application Development',
    description:
      'Custom web applications, dashboards, management systems, and SaaS products tailored to how your business actually operates.',
  },
  {
    icon: 'Bot',
    title: 'AI Integration & Automation',
    description:
      'AI chatbots, intelligent assistants, business automation, and AI-powered features that help your team work smarter.',
  },
  {
    icon: 'Building2',
    title: 'Business Websites',
    description:
      'Professional websites for restaurants, brands, startups, and service providers designed to build trust and convert visitors into inquiries.',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: "Understand your business goals, target audience, and technical requirements before writing a single line of code.",
  },
  {
    step: '02',
    title: 'Planning & Design',
    description: 'Define the architecture, core functionality, and user experience so every page serves a clear purpose.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build the solution using modern, reliable technologies with clean code, responsive layouts, and regular progress updates.',
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Thoroughly test across devices, optimize performance and SEO, and deploy your final product ready for real users.',
  },
]

export const WHY_WORK_WITH_ME = [
  {
    title: 'Business-Focused Development',
    description: 'Every feature is built around solving real operational problems and supporting your business goals — not just aesthetics.',
  },
  {
    title: 'Modern Technologies',
    description: 'Built with proven, modern tools like React, Next.js, Node.js, Supabase, and Python for speed and maintainability.',
  },
  {
    title: 'Responsive & User-Friendly',
    description: 'Interfaces designed to feel intuitive and work smoothly across mobile phones, tablets, laptops, and desktops.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Clean, structured codebases and database designs that can grow alongside your business as requirements evolve.',
  },
  {
    title: 'Clear Communication',
    description: 'Direct, transparent collaboration from initial discovery through launch so you always know where your project stands.',
  },
  {
    title: 'Tailored to Requirements',
    description: 'Custom solutions built around your specific workflow rather than forcing your business into rigid templates.',
  },
]
