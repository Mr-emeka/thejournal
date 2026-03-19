import { mockPosts } from "./mock-posts";
import type { BlogPost } from "./types";

// Simulated network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Abstracted data layer — swap these functions for GraphQL calls later.
 */

export async function fetchAllPosts(): Promise<BlogPost[]> {
  await delay(400);
  return mockPosts;
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  await delay(300);
  return mockPosts.find((p) => p.slug === slug) ?? null;
}

export async function fetchRelatedPosts(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  await delay(200);
  return mockPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
