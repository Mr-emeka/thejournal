'use client';
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PostCard from "@/components/PostCard";
import PostCardSkeleton from "@/components/PostCardSkeleton";
import { fetchAllPosts } from "@/data/api";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export default function Home() {

    const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchAllPosts,
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!posts) return [];
    return Array.from(new Set(posts?.map((p) => p.category)));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (!activeCategory) return posts;
    return posts?.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);
  
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
      {!isLoading && categories.length > 0 && (
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
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.15em] font-body pb-1 border-b-2 transition-colors ${
                  activeCategory === cat
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
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
            ? Array.from({ length: 4 }).map((_, i) => <PostCardSkeleton key={i} />)
            : filteredPosts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>

        {!isLoading && filteredPosts.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No posts in this category yet.
          </p>
        )}
      </main>

      <Footer />

    </div>
  );
}
