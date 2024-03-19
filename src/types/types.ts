export type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};
export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  status: string;
  products: object[];
  createdAt: string;
  intent_id: string;
};
