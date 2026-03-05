import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllCaseStudies, getCaseStudy } from "@/lib/mdxCaseStudies";
import type { Metadata } from "next";

export async function generateStaticParams() {
    const items = await getAllCaseStudies();
    return items.map((cs) => ({ slug: cs.slug }));
}

export const revalidate = 3600;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const cs = await getCaseStudy(slug);
    if (!cs) return {};

    const title = cs.frontmatter.title;
    const description = cs.frontmatter.description;
    const image = cs.frontmatter.thumbnail;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: image ? [{ url: image }] : undefined,
        },
        twitter: {
            card: image ? "summary_large_image" : "summary",
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const cs = await getCaseStudy(slug);
    if (!cs) return notFound();

    return (
        <main className="bg-white text-black">
            <div className="container mx-auto px-2 pb-10">
                <Navbar />
            </div>
            <article className="max-w-5xl mx-auto px-4 py-8 font-merri">
                <h1 className="font-extrabold mb-4 tracking-wider text-4xl md:text-7xl">
                    {cs.frontmatter.title}
                </h1>
                {cs.frontmatter.date ? (
                    <p className="text-sm text-gray-500 mb-6">
                        {new Date(cs.frontmatter.date).toDateString()}
                        {cs.frontmatter.readingTime ? ` · ${cs.frontmatter.readingTime} read` : null}
                    </p>
                ) : null}
                <div className="prose prose-lg max-w-none">{cs.content}</div>
            </article>
            <Footer />
        </main>
    );
}


