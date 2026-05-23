import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data:IResumeData) => {
    const element = document.getElementById("resume-pdf");
    if (!element) return;

    const image = await toPng(element, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;

    // create image object to get natural size
    const img = new Image();
    img.src = image;

    await new Promise((resolve) => {
        img.onload = resolve;
    });

    const imgWidth = img.width;
    const imgHeight = img.height;

    // SCALE proportionally 
    const ratio = Math.min(
        pdfWidth / imgWidth,
        pdfHeight / imgHeight
    );

    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;

    // center image on A4
    const x = (pdfWidth - newWidth) / 2;
    const y = 0

    pdf.addImage(image, "PNG", x, y, newWidth, newHeight);

    pdf.save(`${data.fullname} ${data.template}`);
};