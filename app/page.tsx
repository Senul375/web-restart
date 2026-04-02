import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Credibility } from "@/components/Credibility";
import { Systems } from "@/components/Systems";
import { Demonstration } from "@/components/Demonstration";
import { Process } from "@/components/Process";
import { Offer } from "@/components/Offer";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Credibility />
      <Systems />
      <Demonstration />
      <Process />
      <Offer />
      <FinalCTA />
      <Footer />
    </>
  );
}
