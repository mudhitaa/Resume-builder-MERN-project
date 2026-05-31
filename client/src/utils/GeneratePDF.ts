import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

const A4_WIDTH_PX = 794;   // 210mm at 96dpi
const A4_HEIGHT_PX = 1123; // 297mm at 96dpi

export const generatePDF = async (data: IResumeData) => {
    try {
        const container = document.getElementById("resume-pdf");
        if (!container) {
            console.error("❌ #resume-pdf not found");
            return;
        }

        await document.fonts.ready;
        await new Promise(res => setTimeout(res, 300));

        // Reset zoom transform on parent
        const parent = container.parentElement;
        const originalTransform = parent?.style.transform ?? "";
        const originalMargin = parent?.style.marginBottom ?? "";
        if (parent) {
            parent.style.transform = "scale(1)";
            parent.style.marginBottom = "0";
        }

        // Force container to exact A4 pixel width so grid doesn't collapse
        const originalWidth = container.style.width;
        const originalMinWidth = container.style.minWidth;
        container.style.width = `${A4_WIDTH_PX}px`;
        container.style.minWidth = `${A4_WIDTH_PX}px`;

        await new Promise(res => setTimeout(res, 150));

        await toJpeg(container, { backgroundColor: "#ffffff" });

        // Second call does the real capture
        const dataUrl = await toJpeg(container, {
            cacheBust: false,
            pixelRatio: 2,
            backgroundColor: "#ffffff",
            quality: 0.95,
            width: A4_WIDTH_PX,
            height: container.scrollHeight,
        });

        // Restore everything
        container.style.width = originalWidth;
        container.style.minWidth = originalMinWidth;
        if (parent) {
            parent.style.transform = originalTransform;
            parent.style.marginBottom = originalMargin;
        }

        if (!dataUrl || !dataUrl.startsWith("data:image/jpeg")) {
            console.error(" Still invalid:", dataUrl?.slice(0, 80));
            return;
        }

       
        const imgHeightMm = (container.scrollHeight / A4_WIDTH_PX) * 210;

        const pdf = new jsPDF("p", "mm", "a4");

        if (imgHeightMm <= 297) {
            // Single page — fits in A4
            pdf.addImage(dataUrl, "JPEG", 0, 0, 210, imgHeightMm);
        } else {
            // Multi-page — slice into A4 chunks
            let yOffset = 0;
            const pageHeightPx = A4_HEIGHT_PX;

            while (yOffset < container.scrollHeight) {
                const canvas = document.createElement("canvas");
                canvas.width = A4_WIDTH_PX * 2; 
                canvas.height = pageHeightPx * 2;

                const ctx = canvas.getContext("2d");
                if (!ctx) break;

                const img = new Image();
                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        ctx.drawImage(
                            img,
                            0, yOffset * 2,              
                            A4_WIDTH_PX * 2,              
                            pageHeightPx * 2,             
                            0, 0,                         
                            A4_WIDTH_PX * 2,             
                            pageHeightPx * 2              
                        );
                        resolve();
                    };
                    img.src = dataUrl;
                });

                if (yOffset > 0) pdf.addPage();
                pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 210, 297);
                yOffset += pageHeightPx;
            }
        }

        pdf.save(`${data.fullname}-${data.template}.pdf`);

    } catch (err) {
        console.error(" PDF generation failed:", err);
    }
};