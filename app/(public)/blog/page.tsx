"use client";

import { Suspense } from "react";
import BlogContent from "@/components/blog";

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
