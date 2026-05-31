import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

const A4_WIDTH_PX = 794;

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("resume-pdf");
        if (!container) {
            console.error(" #resume-pdf not found");
            return;
        }

        await document.fonts.ready;
        await new Promise(res => setTimeout(res, 300));

        // Reset zoom transform
        const parent = container.parentElement;
        const originalTransform = parent?.style.transform ?? "";
        const originalMargin = parent?.style.marginBottom ?? "";
        if (parent) {
            parent.style.transform = "scale(1)";
            parent.style.marginBottom = "0";
        }

        // Force A4 width 
        const originalWidth = container.style.width;
        const originalMinWidth = container.style.minWidth;
        container.style.width = `${A4_WIDTH_PX}px`;
        container.style.minWidth = `${A4_WIDTH_PX}px`;

        await new Promise(res => setTimeout(res, 150));

        // Prime the cache
        await toJpeg(container, { backgroundColor: "#ffffff" });

        // Real capture
        const dataUrl = await toJpeg(container, {
            cacheBust: false,
            pixelRatio: 2,
            backgroundColor: "#ffffff",
            quality: 0.95,
            width: A4_WIDTH_PX,
            height: container.scrollHeight,
        });

        // Restore
        container.style.width = originalWidth;
        container.style.minWidth = originalMinWidth;
        if (parent) {
            parent.style.transform = originalTransform;
            parent.style.marginBottom = originalMargin;
        }

        if (!dataUrl.startsWith("data:image/jpeg")) {
            console.error(" Capture failed:", dataUrl?.slice(0, 80));
            return;
        }

        // One continuous page sized to full content height
        const imgHeightMm = (container.scrollHeight / A4_WIDTH_PX) * 210;
        const pdf = new jsPDF("p", "mm", [210, imgHeightMm]);
        pdf.addImage(dataUrl, "JPEG", 0, 0, 210, imgHeightMm);

        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error("PDF generation failed:", err);
    }
};