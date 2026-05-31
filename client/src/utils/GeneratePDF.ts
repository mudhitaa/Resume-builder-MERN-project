import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("pdf-render");
        if (!container) {
            console.error("#pdf-render not found");
            return;
        }

        const pages = container.querySelectorAll(".resume-page");
        if (!pages.length) {
            console.error("No .resume-page found");
            return;
        }

        const pdf = new jsPDF("p", "mm", "a4");

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i] as HTMLElement;

            const image = await toPng(page, {
                cacheBust: true,
                pixelRatio: 3,
                backgroundColor: "#ffffff",
                skipFonts: true, // ← ADD THIS to avoid CORS font issues
            });

            if (i > 0) pdf.addPage();
            pdf.addImage(image, "PNG", 0, 0, 210, 297);
        }

        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error(" PDF generation failed:", err);
    }
};