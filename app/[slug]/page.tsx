'use client'
import { useQuery } from "@tanstack/react-query";
import { fetchPostBySlug, fetchRelatedPosts } from "@/data/api";
import PostCard from "@/components/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { getReadingTime } from "@/lib/reading-time";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["relatedPosts", slug],
    queryFn: () => fetchRelatedPosts(slug!),
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <div className="container max-w-170 pt-16">
          <Skeleton className="h-4 w-20 mb-4" />
          <Skeleton className="h-10 w-full mb-3" />
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-4 w-48 mb-10" />
          <Skeleton className="w-full aspect-video mb-10" />
          <Skeleton className="h-5 w-full mb-3" />
          <Skeleton className="h-5 w-full mb-3" />
          <Skeleton className="h-5 w-2/3 mb-3" />
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <div className="container pt-24 text-center">
          <h1 className="font-display text-3xl font-semibold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/"
            className="text-foreground underline underline-offset-4 decoration-accent hover:opacity-70 transition-opacity"
          >
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Post Header */}
      <header className="container max-w-[680px] pt-12 sm:pt-20 pb-8">
        <span className="text-xs font-body uppercase tracking-[0.15em] text-accent">
          {post.category}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3 mb-5 leading-[1.15] tracking-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          By {post.author} · {post.date} · {getReadingTime(post.content)} min read
        </p>
      </header>

      {/* Featured Image — full width */}
      <div className="w-full">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Post Body */}
      <article
        className="container max-w-170 pt-12 pb-16 prose animate-fade-in"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back link */}
      <div className="container max-w-170 pb-16">
        <Link
          href="/"
          className="text-sm text-foreground underline underline-offset-4 decoration-accent hover:opacity-70 transition-opacity"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* More Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="border-t border-border">
          <div className="container pt-16 pb-8">
            <h2 className="font-display text-2xl font-semibold mb-12">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {relatedPosts.map((rp) => (
                <PostCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
