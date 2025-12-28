// app/blog/page.tsx
import Blogs from "@/components/blogs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/mdxBlogs";

export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = (await getAllBlogPosts()).sort((a, b) => {
    const dateA = new Date(a.date ?? 0).getTime();
    const dateB = new Date(b.date ?? 0).getTime();
    return dateB - dateA;
  });
  return (
    <div>
      <div className="container mx-auto px-2 pb-5">
        <Navbar />
      </div>
      <Blogs posts={posts} />
      <Footer />
    </div>
  );
}