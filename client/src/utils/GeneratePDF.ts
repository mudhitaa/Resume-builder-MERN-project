import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("resume-pdf");
        if (!container) {
            console.error("#resume-pdf not found");
            return;
        }

        await document.fonts.ready;
        await new Promise(res => setTimeout(res, 300));

        const parent = container.parentElement;
        const originalTransform = parent?.style.transform ?? "";
        const originalMargin = parent?.style.marginBottom ?? "";
        if (parent) {
            parent.style.transform = "scale(1)";
            parent.style.marginBottom = "0";
        }

        await new Promise(res => setTimeout(res, 100));

        const dataUrl = await toJpeg(container, {
            cacheBust: true,
            pixelRatio: 2,
            backgroundColor: "#ffffff",
            quality: 0.95,
            skipFonts: true,
            width: container.scrollWidth,
            height: container.scrollHeight,
        });

        if (parent) {
            parent.style.transform = originalTransform;
            parent.style.marginBottom = originalMargin;
        }

        if (!dataUrl || !dataUrl.startsWith("data:image/jpeg")) {
            console.error("Still invalid:", dataUrl?.slice(0, 80));
            return;
        }

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(dataUrl, "JPEG", 0, 0, 210, 297);
        pdf.save(`${data.template}.pdf`);

    } catch (err) {
        console.error("PDF generation failed:", err);
    }
};