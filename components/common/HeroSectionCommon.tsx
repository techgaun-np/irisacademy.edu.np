"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

const HeroSectionCommon: React.FC<HeroSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  className = "",
}) => {
  return (
    <div className={`relative w-full h-[400px] md:h-[500px] ${className}`}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl font-medium mb-2">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-white max-w-3xl text-sm md:text-lg mb-6">
          {description}
        </p>

        {/* CTA Button */}
        <Button className="bg-yellow-500 text-black font-semibold px-6 py-3 h-10 rounded-full hover:bg-yellow-600">
          Discover More
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionCommon;
