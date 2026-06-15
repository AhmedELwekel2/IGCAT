import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Benefits from "@/components/Benefits";
import Goals from "@/components/Goals";
import Initiatives from "@/components/Initiatives";
import SuccessStories from "@/components/SuccessStories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Benefits />
      <Goals />
      <Initiatives />
      <SuccessStories />
      <Products />
      <Footer />
    </main>
  );
}
