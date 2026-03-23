import HotTrends from "@/components/hot-trends";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllTrendingToolPosts } from "@/lib/mdxHotTrends";

export const revalidate = 3600;

export default async function HotTrendsPage() {
  const posts = (await getAllTrendingToolPosts()).sort((a, b) => {
    const dateA = new Date(a.date ?? 0).getTime();
    const dateB = new Date(b.date ?? 0).getTime();
    return dateB - dateA;
  });
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <div className="container mx-auto px-2 pb-5">
        <Navbar />
      </div>
      <main className="flex-grow flex flex-col">
        <HotTrends posts={posts} />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
