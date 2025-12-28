import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import CaseStudies from "@/components/case-studies";
import { getAllCaseStudies } from "@/lib/mdxCaseStudies";

export const revalidate = 3600;

export default async function CaseStudiesPage() {
    const items = (await getAllCaseStudies()).sort((a, b) => {
        const dateA = new Date(a.date ?? 0).getTime();
        const dateB = new Date(b.date ?? 0).getTime();
        return dateB - dateA;
    });

    return (
        <div>
            <div className="container mx-auto px-2 pb-5">
                <Navbar />
            </div>
            <CaseStudies items={items} />
            <Footer />
        </div>
    );
}