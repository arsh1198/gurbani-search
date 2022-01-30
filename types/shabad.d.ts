type Shabad = {
  id: string;
  shabadid: string;
  pageno: number;
  lineno: number;
};

type SearchShabadsByTextOptions = {
  source: number;
  searchType: number;
};

type SearchShabadsByTextResponse = {
  shabads: Array<{
    shabad: Shabad;
  }>;
};
