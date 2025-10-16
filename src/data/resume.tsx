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
    "Enthusiastic and curious full stack developer with a triple major bachelor's degree in Computer Application. I'm all about the latest tech, currently learning TypeScript and Next.js. You can also find me solving Rubik's cubes at lightning speed or organizing cube competitions. I love tackling problems and embracing new challenges.",
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
      href: "",
      location: "Remote",
      title: "Freelance Web developer",
      logoUrl: "",
      start: "Sept 2023",
      end: "Present"
    },
    {
      company: "Luminar Technohub",
      href: "https://www.luminartechnohub.com/",
      badges: [],
      location: "Kakkanad, Kochi",
      title: "Full stack developer - Intern",
      logoUrl: "/luminarhub.png",
      start: "June 2024",
      end: "Sept 2024",
    },
    {
      company: "Luminar Technolab",
      badges: [],
      href: "https://www.luminartechnolab.com/",
      location: "Kakkanad, Kochi",
      title: "MEA(R)N Stack - Course",
      logoUrl: "/luminartechnolab(1).png",
      start: "Sept 2023",
      end: "March 2024",
    }
  ],
  education: [
    {
      school: "Southern Alberta Institute of Technology",
      href: "https://www.sait.ca/",
      degree: "Diploma in Software Development",
      logoUrl: "/sait.svg",
      start: "2025",
      end: "2026",
    },
    {
      school: "Mahatma Gandhi University",
      href: "https://www.mgu.ac.in",
      degree: "Bachelor of Science in Computer Application",
      logoUrl: "/mguni.png",
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
      href: "https://cubingkerala.org/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "As an active member of the cubing community in Kerala, this web application was developed to help cubers track upcoming and past competitions and their rankings. It enhances a previous application built with JavaScript, React, and Node, which suffered from slow performance on a free hosting service. The new version uses Next.js for improved deployment and TypeScript for type safety, integrating World Cube Association authentication and their APIs to provide essential data, keeping the community informed and engaged.",
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
      href: "https://speedcubersindia.com/",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Being part of a 4-member team, I'm responsible for the frontend development of this web application for SpeedCubers India, an organization currently seeking WCA regional recognition. I'm also actively contributing to the backend of this application. The platform features a national ranking system for Indian cubers and includes a live feed of upcoming and past competitions organized by SpeedCubers India. We are aiming to launch the platform in the coming months.",
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
