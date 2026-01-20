import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col justify-center flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 rounded-md">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <hr className="mt-5" />
        </BlurFade>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-2">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty text-md/relaxed text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold mb-2">Education</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-2">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                altText={education.school}
                title={education.school}
                url={education.url}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold mb-2">Skills</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-2">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex text-muted-foreground flex-col gap-2">
              <p>Frontend</p>
              <div className="flex flex-wrap gap-1">
                {DATA.frontendSkills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
            <div className="flex text-muted-foreground flex-col gap-2 my-2">
              <p>Backend</p>
              <div className="flex flex-wrap gap-1">
                {DATA.backendSkills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold mb-4">Projects</h2>
        </BlurFade>
        <div className="space-y-6 w-full">
          <div className="w-full justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    subtitle={project.subtitle ?? ""}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                    width={project.width}
                    height={project.height}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cubing">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold mb-2">Cubing</h2>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-2">
          {DATA.cubing.map((cubing, id) => (
            <BlurFade
              key={cubing.organization}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={cubing.organization}
                altText={cubing.organization}
                title={cubing.organization}
                url={cubing.url}
                subtitle={cubing.title}
                period={`${cubing.start} - ${cubing.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="flex justify-start text-center w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <p className="mx-auto max-w-[600px] text-start md:text-lg/relaxed">
                Connect me on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="hover:text-blue-400 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>{" or "}
                <Link
                  href={DATA.contact.social.GitHub.url}
                  className="hover:text-blue-400 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>{" "}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
