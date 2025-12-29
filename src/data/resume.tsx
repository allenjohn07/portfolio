import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Allen John",
  initials: "AJ",
  url: "https://allenjohn.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full stack developer, Speedcuber",
  summary:
    "Full-stack developer who loves coffee and learning new things. I studied Computer Science without much direction at first, but somewhere along the way, I got hooked. Been self-learning ever since, and now I&apos;m doing a diploma in Software Development at SAIT, Calgary. I&apos;ve been building web apps with modern tech stacks, helped create websites for Cubing Kerala and Speedcubers India. Right now, I&apos;m working on more projects and have a few ideas I&apos;m hoping to bring to life. When I&apos;m not coding, I&apos;m probably solving Rubik&apos;s cubes.",
  avatarUrl: "/allen-profile.png",
  frontendSkills: [
    "Next.js",
    "TypeScript",
    "React",
    "Javascript",
    "Tailwind",
    "Shadcn UI",
    "Magic UI",
    "NextUI",
    "Lottie JSON",
    "HTML",
    "CSS",
  ],
  backendSkills: [
    "Prisma",
    "PostgreSQL",
    "Node",
    "Express",
    "Rest-API",
    "Mongodb",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/allenjohn07",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/allenjohn07/",
        icon: Icons.linkedin,

        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Freelance",
      badges: [],
      location: "Remote",
      title: "Freelance Web developer",
      logoUrl: "",
      start: "Sept 2023",
      end: "Present"
    },
    {
      company: "Luminar Technohub",
      badges: [],
      location: "Kakkanad, Kochi",
      title: "Full stack developer - Intern",
      start: "June 2024",
      end: "Sept 2024",
    },
    {
      company: "Luminar Technolab",
      badges: [],
      location: "Kakkanad, Kochi",
      title: "MEA(R)N Stack - Course",
      start: "Sept 2023",
      end: "March 2024",
    }
  ],
  education: [
    {
      school: "Southern Alberta Institute of Technology",
      degree: "Diploma in Software Development",
      start: "2025",
      end: "2026",
    },
    {
      school: "Mahatma Gandhi University",
      degree: "Bachelor of Science in Computer Application",
      start: "2019",
      end: "2022",
    }
  ],
  certificates: [
    {
      name: "NACTET",
      grade: "A+"
    }
  ],
  projects: [
    {
      title: "Cubing Kerala",
      subtitle: "",
      href: "https://cubingkerala.org/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Being part of the cubing community in Kerala, I wanted to build something that&apos;d actually help cubers stay updated on competitions and rankings. This is a revamped version of an older app I built with JavaScript, React, and Node, which was painfully slow on free hosting. So I rebuilt it with Next.js and TypeScript for better performance and reliability. It connects with the World Cube Association&apos;s authentication and APIs to pull in competition data, making it easier for the community to stay in the loop.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "WCA Login",
        "WCA API's",
        "Tailwind",
        "Shadcn UI",
        "Magic UI",
        "Lottie JSON",
      ],
      links: [
        {
          type: "Website",
          href: "https://cubingkerala.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cubingkeralaorg/cubingkerala",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/cubingkerala.png",
      width: 1080,
      height: 1080
    },
    {
      title: "SpeedCubers India",
      subtitle: "In progress",
      href: "https://speedcubersindia.com/",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Part of a 4-member team building the web application for SpeedCubers India, an organization working towards WCA regional recognition. I&apos;m handling most of the frontend and also jumping into backend work when needed. We&apos;re creating a platform with national rankings for Indian cubers and a live feed of upcoming and past competitions. Hoping to launch it in the next few months and see it help grow the cubing community across India.",
      technologies: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Express",
        "Amazon S3",
        "Wca API",
        "Transtack Query",
        "Tailwind",
        "Chakra UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://speedcubersindia.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Speed-Cubers-India",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/sci.png",
      width: 1080,
      height: 1080
    }
  ]
} as const;
