"use client";

import { blogData } from "@/static/blog";
import { BlogItem } from "@/types/blog";
import { useEffect, useState } from "react";
import DetailContent from "./DetailContent";
import DetailHero from "./DetailHero";

const BlogDetails = ({ id }: { id: string }) => {
  const [post, setPost] = useState<BlogItem | null>(null);

  useEffect(() => {
    if (id) {
      const found = blogData.find((b) => b.id.toString() === id);
      setPost(found || null);
    }
  }, [id]);

  if (!post) return <div>Loading or blog not found...</div>;

  return (
    <div className="flex flex-col">
      <DetailHero
        imageSrc={post.image}
        title={post.title}
        authorName={post.author.name}
        authorAvatar={post.author.avatar}
        date={post.author.date}
        readTime={post.author.readTime}
      />

      <DetailContent content={post.content} />
    </div>
  );
};

export default BlogDetails;
