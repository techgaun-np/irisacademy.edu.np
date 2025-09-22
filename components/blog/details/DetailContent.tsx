"use client";
import React from "react";
import { BlogContent } from "@/types/blog";
import { blogData } from "@/static/blog";
import Image from "next/image";
import PopularCard from "./PopularCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  content: BlogContent;
};

const DetailContent = ({ content }: Props) => {
  const popularList = blogData.filter((item) => item.isPopular);

  return (
    <div className="flex flex-col md:grid md:grid-cols-8 gap-4 px-4 py-4">
      {/* left part - contents */}
      <div className="md:col-span-5 flex flex-col gap-4 py-4">
        <p>{content.description}</p>

        {content.keyPerformance && (
          <ul className="list-disc pl-5">
            {content.keyPerformance.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {content.images && content.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {content.images.map((img, idx) => (
              <div key={idx} className="w-full h-42 relative">
                <Image
                  src={img}
                  alt={`content-img-${idx}`}
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}

        {content.matchHighlight && content.matchHighlight.length > 0 && (
          <div className="">
            <h2 className="text-lg font-medium mb-2">
              <span>📊</span>
              Match Highlights
            </h2>
            <ul className="list-disc pl-5">
              {content.matchHighlight.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* right part - popular card */}
      <div className="md:col-span-3">
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-between px-2 items-center text-richBlack">
            <p className="text-richBlack text-[1rem] font-bold">Most Viewed</p>
            <Link
              href={`/blog?filter=popular`}
              className="flex items-center gap-1"
            >
              <p className="text-richBlack text-[0.75rem]">View all</p>
              <ArrowRight className="text-richBlack w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-2 px-2 py-4">
            {popularList.slice(0, 3).map((list, idx) => {
              return (
                <PopularCard
                  key={idx}
                  title={list.title}
                  description={list.description}
                  imageSrc={list.image}
                  views={2456}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
