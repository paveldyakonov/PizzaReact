import { Meta } from "@config/meta";

export type FetchPizzaArgs = {
  sortBy: string;
  page: number;
  limit: number;
  category?: number;
  title?: string;
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

export interface pizzaState {
  items: Pizza[];
  meta: Meta;
}
