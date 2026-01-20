import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Allen John",
  initials: "AJ",
  url: "https://allenjohn.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Full stack developer, Speedcuber",
  summary:
    "Full-stack developer in the making, currently studying at SAIT in Calgary. My journey here wasn&apos;t exactly a straight line. Started with a CS degree (triple major in Math, Stats, and CS) but honestly had no idea what I was doing or why. After graduation, I chased what actually excited me and became a promo editor for a Malayalam film. Loved every creative minute of it, until the unpredictability sent me back to the one field I&apos;d been dodging: software development.\n\nPlot twist: this time it clicked. I rolled up my sleeves, taught myself the fundamentals properly, and after a MERN stack course, something just made sense. Finally found my groove and ended up at SAIT, where the hands-on learning has been a game-changer. These days I&apos;m deep into freeCodeCamp and YouTube tutorials, building projects, and nervously eyeing open source repos (those codebases are no joke, but I&apos;ll crack them eventually). Still figuring out what I want to specialize in, hoping to land a job post-graduation, but mostly just enjoying getting 1% better each day.\n\nOh, and I can solve a Rubik&apos;s Cube in under 10 seconds. Just saying.",
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
      height: 1080,
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
