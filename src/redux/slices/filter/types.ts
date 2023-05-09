import { Meta } from "@config/meta";

export type searchParams = {
  curPage: string;
  filterValue: string;
  categoryId: string;
  searchValue: string;
};

export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: string[];
  price: string;
  category: string;
  rating: string;
};

export interface filterState {
  sortId: number;
  searchValue: string;
  categoryId: number;
  curPage: number;
  pizzasList: Pizza[];
  meta: Meta;
}
