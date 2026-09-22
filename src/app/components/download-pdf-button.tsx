"use client";

import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { downloadCvPdf } from "@/lib/cv-pdf";

/**
 * Button that generates the resume as a PDF and downloads it.
 */
export function DownloadPdfButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => downloadCvPdf(RESUME_DATA)}
      className="mt-3 gap-1.5 print:hidden"
      aria-label="Download resume as PDF document"
    >
      <DownloadIcon className="size-4" aria-hidden="true" />
      Download Document
    </Button>
  );
}
