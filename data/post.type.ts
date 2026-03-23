import { WPCategory, WPImage } from "./posts.type";

// Raw WordPress GraphQL response types for single post
export interface WPAuthor {
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
}

export interface WPTag {
  id: string;
  name: string;
  slug: string;
}

export interface WPSinglePost {
  id: string;
  databaseId: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: {
    node: WPAuthor;
  };
  categories: {
    nodes: WPCategory[]; // reusing WPCategory from before
  };
  tags: {
    nodes: WPTag[];
  };
  featuredImage: {
    node: WPImage; // reusing WPImage from before
  } | null;
}

export interface WPSinglePostResponse {
  post: WPSinglePost;
}
