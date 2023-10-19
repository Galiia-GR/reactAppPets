export interface ItemsTypes {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface CatTypes {
  id: number;
  name: string;
  description: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
