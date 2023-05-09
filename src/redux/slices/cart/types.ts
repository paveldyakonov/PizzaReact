export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: string;
  price: string;
  count?: number;
};

export interface cartState {
  items: Pizza[];
  totalPrice: number;
}
