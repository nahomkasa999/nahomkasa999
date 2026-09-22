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

type UiUxSkills = readonly string[];

interface UiUxCardProps {
  title: string;
  description: string;
  skills: UiUxSkills;
  figma?: string;
}

/**
 * Card component displaying UI/UX design information
 */
function UiUxCard({ title, description, skills, figma }: UiUxCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border p-3 print:border-0 print:p-0 print:shadow-none">
      <CardHeader className="print:p-0">
        <div className="space-y-1">
          <CardTitle className="text-base print:text-sm">{title}</CardTitle>
          <CardDescription
            className="text-pretty font-mono text-xs print:text-[10px]"
            aria-label="Design description"
          >
            {description}
          </CardDescription>
          {figma && (
            <a
              href={figma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground hover:underline"
              aria-label={`${title} Figma file (opens in new tab)`}
            >
              View on Figma
              <ArrowSquareOutIcon className="size-3" weight="bold" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto print:hidden">
        {skills.length > 0 && (
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-medium text-muted-foreground">
              Skills:
            </span>
            <ul
              className="flex list-none flex-wrap gap-1 p-0"
              aria-label="Skills used"
            >
              {skills.map((skill) => (
                <li key={skill}>
                  <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface UiUxProps {
  designs: (typeof RESUME_DATA)["uiux"];
}

/**
 * Section component displaying UI/UX designs with YouTube video
 */
export function UiUx({ designs }: UiUxProps) {
  return (
    <Section className="scroll-mb-16 print:space-y-2">
      <h2 className="text-xl font-bold print:text-lg" id="uiux-designs">
        UI/UX Design
      </h2>

      {/* YouTube Video - hidden in print */}
      <div className="mb-4 overflow-hidden rounded-lg border print:hidden">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/KQ1kPJ0bCQk?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1"
            title="UI/UX Design Process"
            allow="autoplay; encrypted-media"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

      {/* Design Cards - 2 columns screen, simple list for print */}
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 print:mx-0 print:grid-cols-1 print:gap-0"
        role="feed"
        aria-labelledby="uiux-designs"
      >
        {designs.map((design) => (
          <article
            key={design.title}
            className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm print:translate-y-0 print:shadow-none"
          >
            <UiUxCard
              title={design.title}
              description={design.description}
              skills={design.skills}
              figma={design.figma}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
