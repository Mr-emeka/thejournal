import { getReadingTime } from "@/lib/reading-time";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/assets/hero-post-6.jpg";
import { WPPost } from "@/data/posts.type";
import { format } from "date-fns";

interface PostCardProps {
  post: WPPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const readingTime = getReadingTime(post.content);
  return (
    <article className="group">
      <Link href={`/${post.slug}`} className="block overflow-hidden mb-5">
        <div className="relative w-full aspect-video">
          <Image
            src={post.featuredImage?.node.sourceUrl ?? placeholder}
            alt={post.featuredImage?.node.altText ?? post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </Link>
      <span className="text-xs font-body uppercase tracking-[0.15em] text-accent">
        {post.categories.nodes.map((c) => c.name)}
      </span>
      <h2 className="font-display text-xl sm:text-2xl font-semibold mt-2 mb-3 leading-snug">
        <Link
          href={`/${post.slug}`}
          className="hover:opacity-70 transition-opacity"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2 mb-3">
        {post.excerpt.replace(/<[^>]+>/g, "")}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {format(new Date(post.date), "MMMM d, yyyy")} · {readingTime} min read
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
