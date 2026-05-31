import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

const A4_WIDTH_PX = 794;

const captureElement = async (el: HTMLElement): Promise<string> => {
    // Prime the cache
    await toJpeg(el, { backgroundColor: "#ffffff" });
    // Real capture
    return toJpeg(el, {
        cacheBust: false,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        quality: 0.95,
        width: A4_WIDTH_PX,
        height: el.scrollHeight,
    });
};

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

        // Force A4 width so grid layout doesn't collapse
        const originalWidth = container.style.width;
        const originalMinWidth = container.style.minWidth;
        container.style.width = `${A4_WIDTH_PX}px`;
        container.style.minWidth = `${A4_WIDTH_PX}px`;

        await new Promise(res => setTimeout(res, 150));

        const pdf = new jsPDF("p", "mm", "a4");

        // Check if template has explicit resume-page divs (Classic)
        const pages = container.querySelectorAll<HTMLElement>(".resume-page");

        if (pages.length > 1) {
            // Multi-page template (Classic)
            for (let i = 0; i < pages.length; i++) {
                const page = pages[i];

                // F page to A4 width too
                const origPageWidth = page.style.width;
                const origPageMinWidth = page.style.minWidth;
                page.style.width = `${A4_WIDTH_PX}px`;
                page.style.minWidth = `${A4_WIDTH_PX}px`;

                await new Promise(res => setTimeout(res, 100));

                const dataUrl = await captureElement(page);

                // Restore
                page.style.width = origPageWidth;
                page.style.minWidth = origPageMinWidth;

                if (!dataUrl.startsWith("data:image/jpeg")) {
                    console.error(`❌ Page ${i + 1} capture failed`);
                    continue;
                }

                // Scale height 
                const imgHeightMm = (page.scrollHeight / A4_WIDTH_PX) * 210;

                if (i > 0) pdf.addPage();
                pdf.addImage(dataUrl, "JPEG", 0, 0, 210, Math.min(imgHeightMm, 297));
            }

        } else {
            //  Single-page template (Modern, Minimal)
            const dataUrl = await captureElement(container);

            if (!dataUrl.startsWith("data:image/jpeg")) {
                console.error("Capture failed");
                return;
            }

            const imgHeightMm = (container.scrollHeight / A4_WIDTH_PX) * 210;
            pdf.addImage(dataUrl, "JPEG", 0, 0, 210, imgHeightMm);
        }

        // Restore container 
        container.style.width = originalWidth;
        container.style.minWidth = originalMinWidth;
        if (parent) {
            parent.style.transform = originalTransform;
            parent.style.marginBottom = originalMargin;
        }

        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error("PDF generation failed:", err);
    }
};