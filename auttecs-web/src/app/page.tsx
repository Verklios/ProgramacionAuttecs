import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import UseCases from "@/components/UseCases";
import Demos from "@/components/Demos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030b14] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <UseCases />
      <Demos />
      <Contact />
      <Footer />
    </main>
  );
}
