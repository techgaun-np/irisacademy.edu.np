"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import userImg from "@/public/common/user.png";
import { CalendarRange, Clock3 } from "lucide-react";

interface HeroSectionProps {
  imageSrc: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  className?: string;
}

const DetailHero: React.FC<HeroSectionProps> = ({
  imageSrc,
  title,
  authorName,
  authorAvatar,
  date,
  readTime,
  className,
}) => {
  return (
    <div className={cn("relative w-full h-[470px] md:h-[570px]", className)}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div
        className={cn(
          "absolute bottom-12 left-2 z-10",
          "flex flex-col justify-center text-center px-4 pb-2"
        )}
      >
        <h2 className="text-white text-xl md:text-2xl font-bold mb-4">
          {title}
        </h2>

        <div className="flex items-center gap-3 text-gray-300">
          <div className="flex items-center gap-2">
            <Image
              src={authorAvatar || userImg}
              alt={title}
              priority
              className="w-5 h-5 rounded-full"
            />
            <p className="text-sm font-medium">{authorName}</p>
          </div>
          <div className="flex gap-2">
            <p className="flex items-center gap-2 text-xs">
              <span>
                <CalendarRange className="w-5 h-5" />
              </span>
              {date}
            </p>
            <p className="flex items-center gap-2 text-xs">
              <span>
                <Clock3 className="w-5 h-5" />
              </span>
              {readTime} read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
