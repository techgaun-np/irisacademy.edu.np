"use client";
import React, { useEffect, useState } from "react";
import BlogSectionHero from "./BlogSectionHero";
import BlogList from "./lists";
import { useSearchParams } from "next/navigation";
import { BlogData, BlogListType } from "@/types/blog";
import { blogData } from "@/static/blog";

const BlogContent = () => {
  const searchParams = useSearchParams();
  const [listData, setListData] = useState<BlogData | []>([]);

  const filter = searchParams.get("filter");

  const getListData = () => {
    if (filter === BlogListType.POPULAR) {
      const popularList = blogData.filter((item) => item.isPopular);
      setListData(popularList);
    } else {
      setListData(blogData);
    }
  };

  useEffect(() => {
    getListData();
  }, [filter]);

  return (
    <div>
      <BlogSectionHero
        title={filter === BlogListType.POPULAR ? "Popular Blog" : "Our Blog"}
      />
      <BlogList listData={listData} />
    </div>
  );
};

export default BlogContent;
