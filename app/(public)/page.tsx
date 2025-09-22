import GallaryImage from "@/components/gallary/GallaryImage";
import AboutSection from "@/components/homepage/AboutSection";
import AcademySection from "@/components/homepage/AcademySection";
import Hero from "@/components/homepage/Hero";
import JoinCommunityComponent from "@/components/homepage/JoinCommunityComponent";
import PrincipalMessageComponent from "@/components/homepage/PrincipleMessageComponent";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AcademySection />
      <PrincipalMessageComponent />
      <GallaryImage />
      <JoinCommunityComponent />
    </div>
  );
}
