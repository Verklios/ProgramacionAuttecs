import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030b14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
