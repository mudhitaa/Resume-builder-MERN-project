import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import type { IResumeData } from "../types/FormTypes";

export const generatePDF = async (data: IResumeData) => {

    const pages = document.querySelectorAll(".resume-page");

    if (!pages.length) return;

    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {

        const page = pages[i] as HTMLElement;

        const image = await toPng(page, {
            cacheBust: true,
            pixelRatio: 3,
            backgroundColor: "#ffffff",
        });

        if (i > 0) {
            pdf.addPage();
        }

        pdf.addImage(
            image,
            "PNG",
            0,
            0,
            210,
            297
        );
    }

    pdf.save(`${data.fullname}-${data.template}.pdf`);
};