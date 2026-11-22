// Centralized configuration — edit this file to update all site content

export const PERSONAL = {
  name: 'Shafey Ali',
  age: 21,
  university: 'Arid Agriculture University Rawalpindi',
  campus: 'GIMS, Gujrat',
  degree: 'Computer Science (Artificial Intelligence)',
  semester: '5th',
  experience: '1 Year',
  role: 'Part-time Freelance Developer',
  email: 'shafey8124@gmail.com',
  github: 'https://github.com/shafey14-hash',
  linkedin: 'https://www.linkedin.com/in/shafey-ali-87218b2bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  intro: "I'm Shafey Ali, a Computer Science student specializing in Artificial Intelligence and a part-time freelance developer. I enjoy transforming ideas into functional digital products, building modern web applications, and creating interactive experiences that combine technology with thoughtful design.",
}

export const PROJECTS = [
  {
    id: '01',
    title: 'SA Parties',
    category: 'E-Commerce | Full-Stack Development',
    description: 'SA Parties is an online e-commerce platform specializing in occasional, celebration, and party supplies. It provides customers with a convenient online shopping experience where they can explore products and place orders through a dynamic website.',
    highlights: [
      'Dynamic e-commerce website',
      'Product browsing & catalog',
      'Shopping cart & ordering functionality',
      'Customer-focused shopping experience',
      'Admin-side management functionality',
    ],
    url: 'https://sa-parties.vercel.app',
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
    description: 'Little Chef Pizza is a digital ordering platform for a restaurant based in Gujrat, Pakistan, providing online food ordering and delivery services. The project includes a dynamic restaurant website along with a dedicated mobile application.',
    highlights: [
      'Dynamic restaurant website',
      'Online food ordering system',
      'Restaurant-focused digital experience',
      'Dedicated mobile application',
      'Website and mobile application development',
    ],
    url: 'https://little-chef-pizza.vercel.app',
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
    description: 'Py Terminal is an online integrated development environment designed to provide users with a convenient coding experience directly through their browser. It supports Python and C++ programming languages and features an integrated Gemini-powered AI agent to assist users with their coding workflow.',
    highlights: [
      'Online IDE in the browser',
      'Python & C++ support',
      'Gemini-powered AI agent',
      'AI-assisted coding workflow',
      'Browser-based development environment',
    ],
    url: null,
    cta: null,
    status: 'development',
    type: 'ide',
    tech: ['React', 'Python', 'C++', 'Gemini API'],
    accent: '#5b8def',
  },
]

export const SKILLS = {
  'Frontend Development': ['React.js', 'Next.js', 'JavaScript', 'TypeScript'],
  'Backend Development': ['Node.js'],
  'Database Management': ['Supabase', 'MySQL'],
  'Programming Languages': ['Python', 'C++'],
}

export const SERVICES = [
  {
    icon: 'Globe',
    title: 'Website Development',
    description: 'Clean, modern, and high-performance websites built with the latest technologies — crafted for speed, usability, and lasting impressions.',
  },
  {
    icon: 'ShoppingCart',
    title: 'E-Commerce Development',
    description: 'Full-featured online stores with product catalogs, shopping carts, order management, and admin dashboards tailored to your business.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Restaurant & Food Ordering Websites',
    description: 'Digital ordering platforms for restaurants — from menu browsing and online orders to delivery tracking and admin management.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Admin & User Dashboards',
    description: 'Intuitive dashboards that give you full control — user management, analytics, content control, and real-time data visualization.',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack Web Applications',
    description: 'End-to-end web applications combining powerful backends with elegant frontends — built to scale and designed to perform.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Application Development',
    description: 'Dedicated mobile applications that extend your digital product beyond the browser — giving your users a native mobile experience.',
  },
  {
    icon: 'Bot',
    title: 'AI-Powered Web Solutions',
    description: 'Intelligent web applications with integrated AI features — from AI assistants and chatbots to Gemini-powered development tools.',
  },
]
