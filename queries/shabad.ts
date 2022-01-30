import client from "../client";

export const searchShabadsByText = async (
  text: string,
  options?: SearchShabadsByTextOptions
) => {
  const { data } = await client.get<SearchShabadsByTextResponse>(
    `/search/${text}`,
    {
      params: {
        source: 1,
        searchType: 0,
        ...options,
      },
    }
  );
  return data;
};
