import Image from "next/image";
import React from "react";
import userImg from "@/public/common/user.png";
import { cn } from "@/lib/utils";
import { BlogAuthor } from "@/types/blog";
import Link from "next/link";

type Props = {
  id: string;
  image: string;
  title: string;
  description: string;
  author: BlogAuthor;
  className?: string;
};

const ListCard = ({
  id,
  image,
  title,
  description,
  author,
  className,
}: Props) => {
  return (
    <Link href={`/blog/${id}`} className="block">
      <div
        className={cn(
          "border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden w-70",
          "flex flex-col gap-3 pb-4 w-full cursor-pointer",
          "transform transition-transform duration-300 ease-in-out hover:scale-105",
          className
        )}
      >
        <div className="w-full h-48">
          <Image
            src={image}
            alt={title}
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 px-4">
          {/* content */}
          <div className="flex flex-col gap-2">
            <div>
              <span className="rounded-[0.25rem] text-[0.75rem] font-[600] p-2 bg-cloudCream text-olive-drab">
                Player Spotlight
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm min-h-20">{description}</p>
          </div>

          {/* author info */}
          <div className="mt-4 flex items-center space-x-2">
            <Image
              src={author.avatar || userImg}
              alt={title}
              priority
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{author.name}</p>
              <p className="text-xs text-gray-500">
                {author.date} · {author.readTime} read
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
