import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ShopContent from "../components/Sections/ShopContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <Hero />
      <ShopContent />
      <Footer />
    </main>
  );
}
