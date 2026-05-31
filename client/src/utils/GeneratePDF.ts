import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("resume-pdf");
        if (!container) {
            console.error("#resume-pdf not found");
            return;
        }

        const pdf = new jsPDF("p", "mm", "a4");

        const image = await toPng(container, {
            cacheBust: true,
            pixelRatio: 3,
            backgroundColor: "#ffffff",
            skipFonts: true,
        });

        pdf.addImage(image, "PNG", 0, 0, 210, 297);
        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error("PDF generation failed:", err);
    }
};