"use client";

import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  const isLive = !link.includes("github.com");

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        {isLive ? (
          <ArrowSquareOutIcon className="size-3.5 text-green-600" weight="bold" />
        ) : (
          <span
            className="size-1 rounded-full bg-green-500"
            title="Active project indicator"
            aria-hidden="true"
          />
        )}
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="mt-2 flex list-none flex-wrap gap-1 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
}

/**
 * Card component displaying project information
 */
function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3 print:border-0 print:p-0 print:shadow-none">
      <CardHeader className="print:p-0">
        <div className="space-y-1">
          <CardTitle className="text-base print:text-sm">
            <ProjectLink title={title} link={link} />
          </CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Project description"
          >
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto print:hidden">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium text-muted-foreground">
            Tech Stack:
          </span>
          <ProjectTags tags={tags} />
        </div>
      </CardContent>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

/**
 * Section component displaying all side projects
 */
export function Projects({ projects }: ProjectsProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-2">
      <h2 className="text-xl font-bold print:text-lg" id="side-projects">
        Projects
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 print:mx-0 print:grid-cols-1 print:gap-0"
        role="feed"
        aria-labelledby="side-projects"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm print:translate-y-0 print:shadow-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
