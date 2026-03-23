"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PostCard from "@/components/PostCard";
import PostCardSkeleton from "@/components/PostCardSkeleton";
import { WPCategory, WPPost } from "@/data/posts.type";
import { getAllPosts, getAllPostsCategories } from "@/services/blog.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // fetch posts with ability to filter by category
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", activeCategory],
    queryFn: () => getAllPosts(activeCategory ?? undefined),
  });

  // fetch all categories query

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllPostsCategories(),
  });

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      {/* Hero */}
      <header className="container pt-16 pb-12 sm:pt-24 sm:pb-16">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          Stories &amp; Insights
        </h1>
        <div className="w-16 h-0.5 bg-accent mt-6" />
      </header>

      {/* Category Filters */}
      {!isLoading && categories?.length > 0 && (
        <div className="container pb-10">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs uppercase tracking-[0.15em] font-body pb-1 border-b-2 transition-colors ${
                activeCategory === null
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat: WPCategory) => (
              <button
                key={cat.databaseId}
                onClick={() => setActiveCategory(cat.databaseId)}
                className={`text-xs uppercase tracking-[0.15em] font-body pb-1 border-b-2 transition-colors ${
                  activeCategory === cat.databaseId
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Post Grid */}
      <main className="container pb-16">
        {isError && (
          <p className="text-muted-foreground text-center py-12">
            Something went wrong loading posts. Please try again later.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <PostCardSkeleton key={i} />
              ))
            : posts?.map((post: WPPost) => (
                <PostCard key={post.slug} post={post} />
              ))}
        </div>

        {!isLoading && posts?.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No posts in this category yet.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}
