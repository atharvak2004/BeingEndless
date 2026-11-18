import { BlogGrid } from "@/components/sections";
import { posts } from "@/data/posts";
import { seo } from "@/lib/seo";

export const metadata = seo({
  title: "Blogs | Being Endless",
  description:
    "Mental health and self-help are essential for personal development and overall well-being. By engaging in self-help, individuals are able to effectively navigate life's challenges by cultivating resilience, self-awareness, and a proactive attitude toward challenges. Mental health has a direct impact on relationships, decision-making, and emotional stability. Mental health enables individuals to meaningfully contribute to their communities and maintain positive social connections.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogGrid as="h1" title="Blogs" posts={posts} />;
}
