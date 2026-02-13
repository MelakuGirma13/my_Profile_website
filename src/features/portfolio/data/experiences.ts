import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "safaricom",
    companyName: "Safaricom (Vodacom)",
    companyLogo: "", // Add logo URL if available
    positions: [
      {
        id: "integration-engineer",
        title: "Integration Engineer",
        employmentPeriod: {
          start: "03.2023", // assumed start date after CUSTOR
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Orchestrated the integration of M-Pesa with banks and merchant platforms by developing robust APIs, ensuring secure and compliant financial data exchange.
- Led testing, troubleshooting, and provided technical guidance for a smooth integration process.
- Collaborated with stakeholders to align integration strategies with business objectives.`,
        skills: [
          "API Development",
          "REST APIs",
          "Financial Systems Integration",
          "M-Pesa API",
          "Testing & Troubleshooting",
          "Stakeholder Collaboration",
          "Technical Guidance",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true, // assuming current role
  },
  
  {
    id: "custor",
    companyName: "CUSTOR Computing",
    companyLogo: "",
    positions: [
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "03.2020",
          end: "02.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Implemented scalable web applications using Angular and ASP.NET Core.
- Collaborated closely with UX/UI designers to enhance user experience.
- Implemented RESTful APIs and optimized database queries for performance.`,
        skills: [
          "Angular",
          "ASP.NET Core",
          "REST APIs",
          "SQL",
          "Database Optimization",
          "UI/UX Collaboration",
          "Entity Framework",
        ],
        isExpanded: true,
      },
    ],
  },

  {
    id: "peds",
    companyName: "Professional Electronic Data Systems (PEDS)",
    companyLogo: "",
    positions: [
      {
        id: "full-stack-developer",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "11.2016",
          end: "07.2018",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and maintained ASP.NET Web API, Angular, and Bootstrap applications, ensuring robust performance and user-friendly interfaces.
- Utilized SQL Server Database 2016 and SQL Server Reporting Service 2016 to manage and report data efficiently, contributing to streamlined operations.`,
        skills: [
          "ASP.NET",
          "Angular",
          "Bootstrap",
          "SQL Server",
          "SSRS",
          "Web API",
        ],
        isExpanded: true,
      },
    ],
  },

  {
    id: "education",
    companyName: "Education",
    companyLogo: "",
    positions: [
      {
        id: "bsc-computer-science",
        title: "BSc in Computer Science and Engineering",
        employmentPeriod: {
          start: "09.2012",
          end: "06.2016",
        },
        icon: "education",
        description: `- Bahirdar University Institute of Technology, Bahirdar
- Graduated with a degree in Computer Science and Engineering.`,
       
      },
      {
        id: "professional-trainings",
        title: "Professional Trainings & Certifications",
        employmentPeriod: {
          start: "2016",
          end: "2024",
        },
        icon: "education",
        description: `- Azure Fundamental
- ArgoCD
- Microservices: Design Patterns
- Microsoft Professional Program in Artificial Intelligence
- Containerize Applications with Docker
- IBM Cloud Computing
- Application Programming Interface (API)
- IBM Professional Skills
- Agile, Git, Cloud Computing
- Project Management
- Banking and Financial Markets
- Remote Work Collaboration`,
        skills: [
          "Azure",
          "ArgoCD",
          "Microservices",
          "AI",
          "Docker",
          "Cloud Computing",
          "API Design",
          "Agile",
          "Git",
          "Project Management",
          "Banking",
          "Remote Collaboration",
        ],
      },
    ],
  },
];