import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  views: number;
  className?: string;
};

const PopularCard = ({
  title,
  description,
  imageSrc,
  views,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "flex gap-2 rounded overflow-hidden shadow-lg bg-white h-32",
        className
      )}
    >
      <div className="relative w-42 h-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t cursor-pointer"
        />
      </div>
      <div className="flex flex-col py-2">
        <div className="font-bold text-richBlack">{title}</div>
        <p className="text-richBlack">{description.slice(0, 35)}</p>
        {views && (
          <div className="text-sm text-deepTeal italic h-full flex items-end">
            Views: {views}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularCard;
