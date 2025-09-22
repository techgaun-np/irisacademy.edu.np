"use client";
import React from "react";
import HeroSectionCommon from "../common/HeroSectionCommon";

type Props = {
  title: string;
};

const BlogSectionHero = ({ title }: Props) => {
  return (
    <div>
      <HeroSectionCommon
        imageSrc="/about/about-hero.jpg"
        title={title}
        description="Playing with heart, building a legacy."
        className="h-[100px] md:!h-[400px]"
      />
    </div>
  );
};

export default BlogSectionHero;
