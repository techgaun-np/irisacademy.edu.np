import BlogDetails from "@/components/blog/details";
import { blogData } from "@/static/blog";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.id,
  }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetails id={slug} />;
}
