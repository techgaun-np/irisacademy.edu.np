import GallaryImage from "@/components/gallary/GallaryImage";
import GallaryPageHero from "@/components/gallary/GallaryPageHero";
import JoinCommunityComponent from "@/components/homepage/JoinCommunityComponent";
import React from "react";

const page = () => {
  return (
    <div>
      <GallaryPageHero />
      <GallaryImage />
      <JoinCommunityComponent />
    </div>
  );
};

export default page;
