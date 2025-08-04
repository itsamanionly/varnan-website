import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import NewsPage from "@/components/newsletter";

const Newsletter = () => {
  return (
    <main className="bg-white text-black">
      <div className="container mx-auto px-2 pb-10">
        <Navbar />
      </div>
      <NewsPage />
      <Footer />
    </main>
  );
};
export default Newsletter;