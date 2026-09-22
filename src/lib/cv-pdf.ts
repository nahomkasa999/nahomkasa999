import { jsPDF } from "jspdf";
import type { ResumeData } from "@/lib/types";

const FONT = "helvetica";

/**
 * Builds the resume as a PDF client-side and triggers a download.
 */
export function downloadCvPdf(data: ResumeData): void {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const section = (title: string) => {
    ensureSpace(48);
    y += 16;
    doc.setFont(FONT, "bold");
    doc.setFontSize(14);
    doc.text(title, margin, y);
    y += 6;
    doc.setDrawColor(180);
    doc.line(margin, y, pageWidth - margin, y);
    y += 16;
  };

  const paragraph = (
    text: string,
    fontSize = 11,
    style: "normal" | "bold" | "italic" = "normal"
  ) => {
    doc.setFont(FONT, style);
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, maxWidth) as string[];
    const lineHeight = fontSize + 4;
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, margin, y);
      y += lineHeight;
    }
  };

  const bullet = (text: string) => {
    doc.setFont(FONT, "normal");
    doc.setFontSize(11);
    const indent = 12;
    const lines = doc.splitTextToSize(text, maxWidth - indent) as string[];
    const lineHeight = 15;
    for (let i = 0; i < lines.length; i++) {
      ensureSpace(lineHeight);
      if (i === 0) {
        doc.text("•", margin, y);
      }
      doc.text(lines[i], margin + indent, y);
      y += lineHeight;
    }
  };

  const row = (left: string, right?: string) => {
    ensureSpace(22);
    doc.setFont(FONT, "bold");
    doc.setFontSize(12);
    doc.text(left, margin, y);
    if (right) {
      doc.setFont(FONT, "normal");
      doc.setFontSize(10);
      doc.text(right, pageWidth - margin, y, { align: "right" });
    }
    y += 18;
  };

  // Header: name, about, contact
  doc.setFont(FONT, "bold");
  doc.setFontSize(24);
  doc.text(data.name, margin, y);
  y += 22;

  paragraph(data.about, 12);
  y += 4;

  const contactParts = [
    data.location,
    data.contact.email,
    data.contact.tel,
    data.personalWebsiteUrl,
    ...data.contact.social.map((s) => s.url),
  ].filter(Boolean);
  paragraph(contactParts.join("  |  "), 10);
  y += 4;

  // About
  section("About");
  paragraph(data.summary, 11);

  // Work experience
  section("Work Experience");
  for (const work of data.work) {
    ensureSpace(72);
    row(work.company, `${work.start} - ${work.end ?? "Present"}`);
    paragraph(work.title, 11, "italic");
    paragraph(work.description, 11);
    y += 4;
    for (const highlight of work.highlights ?? []) {
      bullet(highlight);
    }
    y += 10;
  }

  // Education
  section("Education");
  for (const edu of data.education) {
    ensureSpace(44);
    row(edu.school, `${edu.start} - ${edu.end}`);
    paragraph(edu.degree, 11, "italic");
    y += 6;
  }

  // Skills
  section("Skills");
  paragraph(data.skills.join(", "), 11);

  // Projects
  section("Projects");
  for (const project of data.projects) {
    ensureSpace(56);
    row(project.title, project.link?.label);
    paragraph(project.description, 11);
    paragraph(project.techStack.join(", "), 10, "italic");
    y += 8;
  }

  // UI/UX designs
  if (data.uiux.length > 0) {
    section("UI/UX Design");
    for (const design of data.uiux) {
      ensureSpace(56);
      row(design.title);
      paragraph(design.description, 11);
      paragraph(design.skills.join(", "), 10, "italic");
      y += 8;
    }
  }

  doc.save(`${data.name.replace(/\s+/g, "-")}-CV.pdf`);
}
