import { toJpeg } from "html-to-image";  // ← change import
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("resume-pdf");

        if (!container) {
            console.error(" #resume-pdf not found");
            return;
        }
        
console.log("Container size:", container.offsetWidth, container.offsetHeight);
console.log("Container HTML:", container.innerHTML.slice(0, 200));

        // Wait for fonts/images to load
        await document.fonts.ready;

        const dataUrl = await toJpeg(container, {
            cacheBust: true,
            pixelRatio: 2,
            backgroundColor: "#ffffff",
            quality: 0.95,
            skipFonts: true,
        });

        // Validate output before passing to jsPDF
        if (!dataUrl || !dataUrl.startsWith("data:image/jpeg")) {
            console.error(" Invalid image data:", dataUrl?.slice(0, 50));
            return;
        }

        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(dataUrl, "JPEG", 0, 0, 210, 297);
        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error("PDF generation failed:", err);
    }
};