import {
  getPosts,
  getPostsSlug,
  getPostsBySlug,
  getCategories,
  getPostsByAuthor,
  getPostsByTag,
  getRelatedPostsQuery,
} from "@/graphql/queries";
import fetchAPI from "./api.service";
import {
  WPCategory,
  WPPost,
  WPPostEdge,
  WPPostsResponse,
} from "@/data/posts.type";
import { WPSinglePostResponse } from "@/data/post.type";

export const getAllPosts = async (category?: number): Promise<WPPost[]> => {
  const data: WPPostsResponse = await fetchAPI(getPosts, {
    variables: {
      first: 100,
      categoryId: category ?? null,
    },
  });

  return data.posts.edges.map(({ node }) => node);
};

export const getAllPostsSlug = async () => {
  const data = await fetchAPI(getPostsSlug, {
    variables: {
      first: 100,
    },
  });

  return data?.posts;
};

export const getPost = async (slug: string) => {
  const data: WPSinglePostResponse = await fetchAPI(getPostsBySlug, {
    variables: {
      id: slug,
      idType: "SLUG",
    },
  });
  return data?.post;
};


export const getAuthorPosts = async (slug: string) => {
  const data = await fetchAPI(getPostsByAuthor, {
    variables: {
      first: 40,
      where: {
        authorName: slug,
      },
    },
  });

  return data;
};

export const getTagPosts = async (id: string) => {
  const data = await fetchAPI(getPostsByTag, {
    variables: {
      first: 40,
      where: {
        tag: id,
      },
    },
  });

  return data;
};

export const getAllPostsCategories = async () => {
  const data = await fetchAPI(getCategories);
  return data?.categories?.edges?.map(({ node }: { node: WPCategory }) => ({
    id: node.id,
    name: node.name,
    databaseId: node.databaseId,
  })) ?? [];
};

export const getRelatedPosts = async (
  categoryId?: number,
  excludeSlug?: string, // current post's slug
  first: number = 4,
): Promise<WPPostEdge[]> => {
  const data: WPPostsResponse = await fetchAPI(getRelatedPostsQuery, {
    variables: { categoryId, first },
  });
  return data.posts.edges.filter(({ node }) => node.slug !== excludeSlug);
};
