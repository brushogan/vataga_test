export type HeadRowType = {
  [key: string]: string;
};

type FiltersInitial = {
  [key: string]: boolean;
};

export interface DataItem {
  [key: string]: string | boolean;
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface Context {
  data: DataItem[];
  count: number;
  currentPage: number;
  viewData: DataItem[];
  setCurrentPage: (arg: number) => void;
  setData: (arg: DataItem[]) => void;
}

export interface ApiResponse {
  count: number;
  entries: DataItem[];
}

export interface filterInitial {
  true?: boolean;
  false?: boolean;
  yes?: boolean;
  no?: boolean;
  unknown?: boolean;
}

interface HTTPSFilter {
  [key: symbol]: string | FiltersInitial;
  title: string;
  initial: { true: boolean; false: boolean };
}

interface CORSFilter {
  [key: symbol]: string | FiltersInitial;
  title: string;
  initial: { yes: boolean; no: boolean; unknown: boolean };
}

export type FilterOptions = (HTTPSFilter | CORSFilter)[];
