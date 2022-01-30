import { useQuery } from "react-query";
import { searchShabadsByText } from "../queries/shabad";

const defaultSearchOptions: SearchShabadsByTextOptions = {
  source: 1,
  searchType: 0,
};

const useShabads = (query) => {
  const response = useQuery(
    ["shabads", query, defaultSearchOptions] as const,
    ({ queryKey }) => {
      const [, text, options] = queryKey;
      return searchShabadsByText(text, options);
    },
    {
      enabled: !!query,
    }
  );
  return response;
};

export default useShabads;
