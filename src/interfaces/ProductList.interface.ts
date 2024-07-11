export interface ProductList {
    id: string;
    name: string;
    categoryId: string;
    price:  unknown[]
}

export interface DefaultProduct {
    name: string;
    minPrice: number;
    maxPrice: number;
    id: number;
    count?: number;
  }