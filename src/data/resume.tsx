import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Allen John",
  initials: "AJ",
  url: "https://allenjohn.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Full stack developer, Speedcuber",
  summary:
    "I&apos;m a full-stack developer currently studying Software Development at SAIT in Calgary. I started out with a CS degree back in India, took a detour into film editing for a bit, and eventually found my way back to code, this time for real.\n\nAfter a MERN stack course and an internship, things started clicking. Now I spend most of my time building projects with Next.js, TypeScript, and whatever else the project needs. I also help maintain [Cubing Kerala](https://cubingkerala.org) and work on the [SpeedCubers India](https://speedcubersindia.com/) platform.\n\nOutside of code, I&apos;m a competitive speedcuber. I can solve a Rubik&apos;s Cube in under 10 seconds.",
  avatarUrl: "/allen-profile.png",
  frontendSkills: [
    "Next.js",
    "TypeScript",
    "React",
    "Javascript",
    "Tailwind",
    "Shadcn UI",
    "HTML",
    "CSS",
  ],
  backendSkills: [
    "Node",
    "Express",
    "Rest-API",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
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
      },
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
      end: "Present",
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
    },
  ],
  education: [
    {
      school: "Southern Alberta Institute of Technology",
      url: "https://www.sait.ca/",
      degree: "Diploma in Software Development",
      start: "2025",
      end: "2026",
    },
    {
      school: "Mahatma Gandhi University",
      url: "https://www.mgu.ac.in/",
      degree: "Bachelor of Science in Computer Application",
      start: "2019",
      end: "2022",
    },
  ],
  certificates: [
    {
      name: "NACTET",
      grade: "A+",
    },
  ],
  projects: [
    {
      title: "Cubing Kerala",
      subtitle: "",
      href: "https://cubingkerala.org/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "A platform for the Kerala cubing community to track competitions and rankings. Originally built with React and Node, I rebuilt it from scratch with Next.js and TypeScript for better performance. It integrates with the World Cube Association&apos;s APIs and authentication to keep competition data up to date.",
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
      height: 1080,
    },
    {
      title: "SpeedCubers India",
      subtitle: "In progress",
      href: "https://speedcubersindia.com/",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Building the web platform for SpeedCubers India as part of a small team. I handle most of the frontend and chip in on the backend. The app features national rankings for Indian cubers and a live competition feed. We&apos;re working towards launch and WCA regional recognition.",
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
      height: 1080,
    },
    {
      title: "OhShift",
      subtitle: "Shifting Platform",
      href: "https://ohshift.vercel.app/",
      dates: "March 2026 - Present",
      active: true,
      description:
        "A shifting platform where companies can register, invite employees, and assign shifts with automated email notifications. Built to streamline workforce management for small businesses.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Nodemailer",
        "Tailwind",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ohshift.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/allenjohn07/OhShift",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/OhShift.png",
      width: 1080,
      height: 1080,
    },
  ],
  cubing: [
    {
      organization: "World Cube Association",
      url: "https://www.worldcubeassociation.org/persons/2017JOHN14",
      title: "Speedcuber and Organizer",
      start: "2017",
      end: "Present",
    },
    {
      organization: "Cubing Kerala",
      url: "https://cubingkerala.org/",
      title: "Core Member and Website Maintainer",
      start: "2017",
      end: "Present",
    },
    {
      organization: "SpeedCubers India",
      url: "https://speedcubersindia.com/",
      title: "Frontend Lead",
      start: "2023",
      end: "Present",
    }
  ]
} as const;
