"use client";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { OurTeam } from "@/components/ourTeam";

const AboutUs = () => {
  return (
    <main className="bg-white text-black">
      <div className="container mx-auto px-2 pb-10">
        <Navbar />
      </div>
      <About />
      <OurTeam />
      <Footer />
    </main>
  );
};
export default AboutUs;
