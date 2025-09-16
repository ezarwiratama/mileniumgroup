import Hero from "@/components/Hero"
import Tentang from "@/components/Tentang"
import Produk from "@/components/Produk";
import Project from "@/components/Project";
import Team from "@/components/Team";
import SubsidiarySection from "@/components/SubsidiarySection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
    <Hero />
    <Tentang />
    <Produk />
    <Project />
    <Team />
    <SubsidiarySection />
    <LocationSection />
    </>
  );
}
