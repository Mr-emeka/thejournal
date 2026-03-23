const fetchAPI = async (query: string, { variables }: Record<string, unknown> = {}) => {
  const headers = { 
    "Content-Type": "application/json",
  };

  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_GRAPHQL_ENDPOINT!, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data;
};

export default fetchAPI;