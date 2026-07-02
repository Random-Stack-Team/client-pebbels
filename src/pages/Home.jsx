import HeroReveal from "../components/home/HeroReveal";
import HeroScene3 from "../components/Hero/HeroScene3";
import Experience from "../components/home/Experience";
import RoomsPreview from "../components/home/RoomsPreview";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroReveal />
      <HeroScene3 />
      <Experience />
      <RoomsPreview />
      <FinalCTA />
    </>
  );
}