import { getMediumPosts } from "@/lib/getMediumPosts";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  try {
    const posts = await getMediumPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch (err) {
    console.error("Failed to fetch Medium posts in generateStaticParams:", err);
    return [];
  }
}

export const dynamic = "auto";

export default async function BlogPostPage(props: any) {
  const params = await props.params;
  const slug = params.slug;

  const posts = await getMediumPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="bg-white text-black">
      <div className="container mx-auto px-2 pb-10">
        <Navbar />
      </div>
      <article className="max-w-5xl mx-auto px-4 py-8 font-merri">
        <h1 className="text-7xl font-extrabold mb-4 tracking-wider">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(post.pubDate).toDateString()}
        </p>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </article>
      <Footer />
    </main>
  );
}
