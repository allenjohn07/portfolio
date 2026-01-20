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
    "Aspiring full-stack developer studying at SAIT, Calgary, Alberta, with a story that took a few turns to get here. I have a CS degree - triple major in Math, Stats, and CS, but I chose it without any real direction or passion. After college, I followed what genuinely interested me and worked as a promo editor for a Malayalam film. It was everything I loved about creativity, but the instability eventually brought me back to software development, the field I&apos;d been avoiding. This time was different though. I committed to actually learning it from the ground up, teaching myself the fundamentals until things finally made sense. A MERN stack course later, I was hooked. \n\nThat&apos;s what brought me to SAIT - and the hands-on experience here has been exactly what I needed. Now I&apos;m continuing to learn through freeCodeCamp and YouTube, working on projects, and slowly making my way into open source (understanding those codebases is tough, but I&apos;ll get those PRs merged soon). I&apos;m still exploring what I want to specialize in and hoping to land a job after graduation, but for now, I&apos;m just enjoying the process of becoming better every day. When I&apos;m not coding, you&apos;ll find me solving Rubik&apos;s cubes.",
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
