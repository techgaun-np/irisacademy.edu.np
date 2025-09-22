import React from "react";
import ListCard from "./ListCard";
import { BlogData } from "@/types/blog";

type Props = {
  listData: BlogData;
};

const BlogList = ({ listData }: Props) => {
  return (
    <div
      style={{
        background:
          "var(--Gradient-radial, radial-gradient(70.8% 70.8% at 50% 50%, #199AA2 0%, #194E52 100%))",
      }}
      className="min-h-[calc(100dvh-300px)] flex flex-col px-[3rem] py-[3.75rem]"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* view all buttons */}
        <div className="flex w-full justify-center md:justify-start mb-8 gap-2 items-center text-white">
          <p className="text-baby-aqua text-[1.25rem]">Latest</p>
        </div>

        {/* blog cards - Using grid for better control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 md:gap-10">
          {listData.map((card, index) => (
            <div key={index} className="w-[350px]">
              <ListCard
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                author={card.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
