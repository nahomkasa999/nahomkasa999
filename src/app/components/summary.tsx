import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-2xl font-bold" id="about-section">
        About
      </h2>
      <div className="text-pretty text-base text-foreground/80 print:text-[14px]">
        {summary}
      </div>
    </Section>
  );
}
