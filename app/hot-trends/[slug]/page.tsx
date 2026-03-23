import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllTrendingToolPosts, getTrendingToolPost } from "@/lib/mdxHotTrends";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllTrendingToolPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getTrendingToolPost(slug);
  if (!post) return {};

  const title = post.frontmatter.title;
  const description = post.frontmatter.description;
  const image = post.frontmatter.image;

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

export default async function TrendingToolPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getTrendingToolPost(slug);

  if (!post) return notFound();

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <div className="container mx-auto px-2 pb-10">
        <Navbar />
      </div>
      <main className="flex-grow w-full overflow-hidden">
        <article className="max-w-5xl mx-auto px-4 md:px-6 py-8 font-merri w-full">
          <h1 className="font-extrabold mb-4 tracking-wider text-4xl md:text-7xl break-words">
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.date ? (
            <p className="text-sm text-gray-500 mb-6">
              {new Date(post.frontmatter.date).toDateString()}
            </p>
          ) : null}
          <div className="prose prose-base md:prose-lg max-w-none w-full break-words prose-pre:max-w-[85vw] md:prose-pre:max-w-full prose-pre:overflow-x-auto">{post.content}</div>
        </article>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
