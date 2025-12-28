import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, getBlogPost } from "@/lib/mdxBlogs";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
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
  const post = await getBlogPost(slug);
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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return (
    <main className="bg-white text-black">
      <div className="container mx-auto px-2 pb-10">
        <Navbar />
      </div>
      <article className="max-w-5xl mx-auto px-4 py-8 font-merri">
        <h1 className="font-extrabold mb-4 tracking-wider text-4xl md:text-7xl">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.date ? (
          <p className="text-sm text-gray-500 mb-6">
            {new Date(post.frontmatter.date).toDateString()}
          </p>
        ) : null}
        <div className="prose prose-lg max-w-none">{post.content}</div>
      </article>
      <Footer />
    </main>
  );
}
