// Raw WordPress GraphQL response types
export interface WPImage {
  sourceUrl: string;
  altText?: string;
}

export interface WPCategory {
  id: string
  name: string;
  databaseId: number;
}

export interface WPPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string;
  categories: {
    nodes: WPCategory[];
  };
  featuredImage: {
    node: WPImage;
  } | null;
}

export interface WPPostEdge {
  node: WPPost;
}

export interface WPPostsResponse {
  posts: {
    edges: WPPostEdge[];
  };
}
