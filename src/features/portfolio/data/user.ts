import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Melaku",
  lastName: "Girma",
  displayName: "Melaku",
  username: "melaku",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Software Engineer",
    "Senior Frontend Developer",
  ],
  address: "Addis Ababa, Ethiopia",
  phoneNumber: "251703839688", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bWVsYWt1Z2lybWExM0BnbWFpbC5jb20=", // base64 encoded
  website: "https://myweb-one-xi.vercel.app/",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Frontend Developer & UI Design Lead",
      company: "",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder",
      company: "",
      website: "https://quaric.com",
    },
  ],
  //   about: `
  // Hello, World! I am Chánh Đại — a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  // With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  // One of my key projects, [ZaDark](https://zadark.com), launched in 2022, enhances the Zalo experience on PC and Web, surpassing 80k+ downloads on [SourceForge](https://sourceforge.net/projects/zadark) and reaching 20k+ active users on the [Chrome Web Store](https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob) (as of Sep 2025).

  // I'm also the creator of [React Wheel Picker](https://react-wheel-picker.chanhdai.com) — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on [npm](https://www.npmjs.com/package/@ncdai/react-wheel-picker) and was selected for [▲Vercel OSS Program](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker) summer 2025 cohort.

  // Let's connect and collaborate!
  //   `,
  about: `
- **Full Stack Software Engineer** with **5+ years of experience**, known for building scalable web applications, microservices, and enterprise systems with strong attention to detail.
- Skilled in **Next.js**, **React**, **TypeScript**, **NestJS**, and modern development workflows; delivering high-quality, user-centric solutions in fully remote environments.
- Passionate about leveraging **AI tools** for faster implementation, efficient debugging, and optimized workflows—turning ideas into polished, production-ready applications.
- Creator of [BlueDot Store](https://bluedot-store.vercel.app/) (2024): full-stack e-commerce platform
  - Built with **Next.js**, **PostgreSQL**, **Prisma ORM**, **Clerk** authentication, and **Stripe** payment processing
  - Deployed on **Vercel** with **Supabase** for data storage
- Creator of **Auction App**: microservices-based platform
  - Built with **.NET Core WebApi**, **Next.js**, **RabbitMQ**, **Docker**, and **Kubernetes**
  - Implemented **CI/CD pipeline** and local deployment orchestration
- Contributed to Ethiopian Investment Commission's online systems ([invest-ethiopia.com](https://invest-ethiopia.com)) and **Online Trade Registration and Licensing System** ([etrade.gov.et](https://etrade.gov.et))
`,
  avatar: "https://iajnbsldqibrouupyqul.supabase.co/storage/v1/object/public/profile_bucket/my_avator.png",
  ogImage:
    "https://iajnbsldqibrouupyqul.supabase.co/storage/v1/object/public/profile_bucket/my_avator.png",
  namePronunciationUrl: "/audio/melaku.mp3",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2026-2-13", // YYYY-MM-DD
};
