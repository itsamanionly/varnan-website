// app/blog/page.tsx
import { getMediumPosts } from "@/lib/getMediumPosts";
import Blogs from "@/components/blogs"; // adjust path if needed
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default async function BlogsPage() {
  const posts = await getMediumPosts();
  return (
    <div>
      <div className="container mx-auto px-2 pb-5">
        <Navbar/>
      </div>
      <Blogs posts={posts}/>
      <Footer/>
    </div>
  );
}