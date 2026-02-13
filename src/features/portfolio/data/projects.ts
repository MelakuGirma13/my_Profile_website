import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "fafresh-fashion",
    title: "Fafresh Fashion - E-commerce App",
    period: {
      start: "01.2024",
    },
    link: "https://fafresh-fashion.vercel.app/",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=BD&backgroundColor=00897b&fontSize=40",
    skills: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "Clerk",
      "Square payments",
      "Vercel",
      "Supabase",
      "Tailwind CSS",
    ],
    description: `Built Online e-commerce app using Next.js, published on Vercel. Designed database schema, UI, integrated Square for payment processing, and managed user authentication with Supabase authentications.`,
    isExpanded: true,
  },

  {
    id: "bluedot-store",
    title: "BlueDot Store - E-commerce App",
    period: {
      start: "01.2024",
    },
    link: "https://bluedot-store.vercel.app/",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=BD&backgroundColor=00897b&fontSize=40",
    skills: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "Clerk",
      "Stripe",
      "Vercel",
      "Supabase",
      "Tailwind CSS",
    ],
    description: `Built an online e-commerce app using Next.js, published on Vercel. Designed database schema, UI, integrated Stripe for payment processing, and managed user authentication with Clerk.`,
    isExpanded: true,
  },

  {
    id: "blockchain-price-tracker",
    title: "Blockchain Price Tracker",
    period: {
      start: "06.2024",
    },
    link: "#",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=BPT&backgroundColor=3b82f6&fontSize=40",
    skills: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Swagger",
      "Docker",
      "Moralis API",
      "Solscan API",
    ],
    description: `API integration with Moralis and Solscan APIs to automatically track blockchain prices and send email notifications when prices increase or decrease.`,
  },

  {
    id: "auction-app",
    title: "Auction App (Microservices)",
    period: {
      start: "03.2023",
      end: "08.2023",
    },
    link: "#",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=AA&backgroundColor=f97316&fontSize=40",
    skills: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Entity Framework",
      "IdentityServer",
      "Microservices",
      ".NET Core WebApi",
      "RabbitMQ",
      "YARP",
      "SignalR",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
    description: `Built a microservices-based auction app using .NET for backend services and Next.js for the client. Designed database schema, developed microservices, UI, CI/CD pipeline, unit/integration testing, and published locally to Kubernetes.`,
    isExpanded: true,
  },

  // {
  //   id: "pos-system",
  //   title: "Point Of Sales System (POS)",
  //   period: {
  //     start: "03.2020",
  //     end: "02.2023",
  //   },
  //   link: "#",
  //   logo: "https://api.dicebear.com/9.x/initials/svg?seed=POS&backgroundColor=7e22ce&fontSize=40",
  //   skills: [
  //     "MySQL",
  //     "Entity Framework",
  //     "Jira",
  //     "Git",
  //     ".NET Framework",
  //     "Bitbucket",
  //     "ASP.NET",
  //     "Angular",
  //   ],
  //   description: `Fully integrated POS software for hospitality (hotels, motels, guesthouses) and retail businesses. Supports sales order taking on mobile devices, order display boards, payment processing, mass price update, hold sales, addition/discount features, fiscal reporting (Z-report, X-report).`,
  // },

  // {
  //   id: "hotel-front-desk",
  //   title: "Hotel Front Desk Management System",
  //   period: {
  //     start: "03.2020",
  //     end: "02.2023",
  //   },
  //   link: "#",
  //   logo: "https://api.dicebear.com/9.x/initials/svg?seed=HMS&backgroundColor=dc2626&fontSize=40",
  //   skills: [
  //     "MySQL",
  //     "Entity Framework",
  //     "Git",
  //     "Jira",
  //     ".NET Framework",
  //     "Bitbucket",
  //     "ASP.NET",
  //     "Angular",
  //   ],
  //   description: `Web application for hospitality industry managing guest processes from reservation to checkout. Integrated POS, dashboards, check-in/out, room assignment, folio management, night audit, yield management, and business performance reporting.`,
  // },

  {
    id: "ethiopian-investment",
    title: "Ethiopian Investment Commission Online Systems",
    period: {
      start: "03.2020",
      end: "02.2023",
    },
    link: "https://invest-ethiopia.com",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=EIC&backgroundColor=0d9488&fontSize=40",
    skills: [
      "MSSQL",
      "Entity Framework Core",
      "Git",
      ".NET Core",
      "Angular 10",
      "Bitbucket",
    ],
    description: `Online systems for investment permit services: request new, renewal, cancellation, expansion, substitution of investment permit; incentive management; online custom duty exception service.`,
  },

  {
    id: "otrls",
    title: "Online Trade Registration and Licensing System (OTRLS)",
    period: {
      start: "03.2020",
      end: "02.2023",
    },
    link: "https://etrade.gov.et/",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=OTRLS&backgroundColor=2563eb&fontSize=40",
    skills: [
      "MSSQL",
      "Entity Framework Core",
      ".NET Core",
      "Angular",
      "Bitbucket",
    ],
    description: `Online system for trade registration and licensing in Ethiopia.`,
  },

  {
    id: "react-dashboard",
    title: "React.js Dashboard",
    period: {
      start: "01.2024",
    },
    link: "https://next-js-dashboard-green.vercel.app/",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=RD&backgroundColor=6b7280&fontSize=40",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: `A modern dashboard built with Next.js and React, demonstrating data visualization and responsive design.`,
  },

  {
    id: "revenue-management",
    title: "Revenue Management System",
    period: {
      start: "03.2020",
      end: "02.2023",
    },
    link: "#",
    logo: "https://api.dicebear.com/9.x/initials/svg?seed=RMS&backgroundColor=ca8a04&fontSize=40",
    skills: [
      "MySQL",
      "Entity Framework",
      ".NET Core",
      "Angular",
      "Git",
      "Jira",
    ],
    description: `Internal system for managing revenue streams, reporting, and financial tracking.`,
  },
];