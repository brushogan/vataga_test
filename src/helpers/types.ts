export type HeadRowType = {
  [key: string]: string;
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
