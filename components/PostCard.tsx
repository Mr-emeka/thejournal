import type { BlogPost } from "@/data/types";
import { getReadingTime } from "@/lib/reading-time";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const readingTime = getReadingTime(post.content);

  return (
    <article className="group">
      <Link href={`/${post.slug}`} className="block overflow-hidden mb-5">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full aspect-16/10 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </Link>
      <span className="text-xs font-body uppercase tracking-[0.15em] text-accent">
        {post.category}
      </span>
      <h2 className="font-display text-xl sm:text-2xl font-semibold mt-2 mb-3 leading-snug">
        <Link href={`/${post.slug}`} className="hover:opacity-70 transition-opacity">
          {post.title}
        </Link>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2 mb-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {post.date} · {readingTime} min read
        </span>
        <Link
          href={`/${post.slug}`}
          className="text-sm text-foreground underline underline-offset-4 decoration-accent hover:opacity-70 transition-opacity"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
