import { FilterOptions, HeadRowType } from "./types";

export const pageSize = 6;

export const paginationRowSize = 8;

export const headRow: HeadRowType = {
  API: "API",
  Категория: "Category",
  HTTPS: "HTTPS",
  CORS: "Cors",
  Описание: "Description",
};

export const filterOptions: FilterOptions = [
  { title: "HTTPS", initial: { true: false, false: false } },
  {
    title: "CORS",
    initial: { yes: false, no: false, unknown: false },
  },
];
