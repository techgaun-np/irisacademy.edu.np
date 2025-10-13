import AboutContent from "@/components/about/AboutContent";
import TeamSection from "@/components/about/TeamSection";
import JoinCommunityComponent from "@/components/homepage/JoinCommunityComponent";

const page = () => {
  return (
    <div>
      <AboutContent />
      <TeamSection />
      <JoinCommunityComponent />
    </div>
  );
};

export default page;
