// QUERIES FOR BLOG POSTS
export const getPosts = /* GraphQL */ `
  query Posts($first: Int,  $categoryId: Int) {
    posts(first: $first, where: { categoryId: $categoryId }) {
      edges {
        node {
          date
          id
          title
          categories {
            nodes {
              name
              databaseId
            }
          }
         content
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

export const getPostsSlug = /* GraphQL */ `
  query PostsSlug($first: Int) {
    posts(first: $first) {
      edges {
        node {
          slug
          author {
            node {
              slug
            }
          }
          tags {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const getPostsBySlug = /* GraphQL */ `
  fragment PostFields on Post {
    id
    databaseId
    slug
    title
    date
    excerpt
    author {
      node {
        name
        slug
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        id
        name
        databaseId
      }
    }
    tags {
      nodes {
        id
        name
        slug
      }
    }
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
    }
  }
`;

export const getPostsByAuthor = /* GraphQL */ `
  query PostByAuthor($first: Int, $where: RootQueryToPostConnectionWhereArgs!) {
    posts(first: $first, where: $where) {
      edges {
        node {
          date
          id
          title
          categories {
            nodes {
              name
            }
          }
          slug
          excerpt
          author {
            node {
              name
              slug
              avatar {
                url
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

export const getPostsByTag = /* GraphQL */ `
  query PostByTag($first: Int, $where: RootQueryToPostConnectionWhereArgs!) {
    posts(first: $first, where: $where) {
      edges {
        node {
          date
          id
          title
          categories {
            nodes {
              name
            }
          }
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          tags {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
`;

// QUERIES FOR PAGES
export const getPages = /* GraphQL */ `
  query Pages {
    pages {
      edges {
        node {
          date
          id
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

export const getPagesSlug = /* GraphQL */ `
  {
    pages {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const getPagesBySlug = /* GraphQL */ `
  fragment PageFields on Page {
    title
    date
  }
  query PageBySlug($id: ID!, $idType: PageIdType) {
    page(id: $id, idType: $idType) {
      ...PageFields
      content
    }
  }
`;

// QUERIES FOR CATEGORY
export const getCategories = /* GraphQL */ `
  query GetCategoryEdges {
    categories {
      edges {
        node {
          id
          name
          databaseId
        }
      }
    }
  }
`;


export const getRelatedPostsQuery = /* GraphQL */ `
  query RelatedPosts($categoryId: Int, $first: Int) {
    posts(
      first: $first
      where: { categoryId: $categoryId  }
    ) {
      edges {
        node {
          id
          title
          slug
          date
          excerpt
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              databaseId
            }
          }
        }
      }
    }
  }
`;