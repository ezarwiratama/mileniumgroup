import Hero from "@/components/section/HeroSection"
import Tentang from "@/components/section/TentangSection"
import Produk from "@/components/section/ProdukSection";
import Project from "@/components/section/ProjectSection";
import Team from "@/components/section/TeamSection";
import SubsidiarySection from "@/components/section/SubsidiarySection";
import LocationSection from "@/components/section/LocationSection";

export default function Home() {
  return (
    <>
    <Hero />
    <Tentang />
    <Produk />
    <Project />
    {/* <Team /> */}
    <SubsidiarySection />
    <LocationSection />
    </>
  );
}
