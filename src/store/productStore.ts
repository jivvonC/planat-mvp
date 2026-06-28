import { create } from "zustand";
import type { StoreCategory, StoreProduct } from "@/types/StoreProduct";

interface ProductStoreState {
  products: StoreProduct[];
  selectedCategory: StoreCategory;
  initialized: boolean;
  initialize: (products: StoreProduct[]) => void;
  setSelectedCategory: (category: StoreCategory) => void;
  toggleLike: (productId: string) => boolean;
  getProductById: (productId: string) => StoreProduct | undefined;
}

export const useProductStore = create<ProductStoreState>((set, get) => ({
  products: [],
  selectedCategory: "전체",
  initialized: false,

  initialize: (products) => set({ products, initialized: true }),

  setSelectedCategory: (selectedCategory) => set({ selectedCategory }),

  toggleLike: (productId) => {
    const product = get().products.find((item) => item.id === productId);
    if (!product) {
      return false;
    }

    const nextLiked = !product.liked;
    set({
      products: get().products.map((item) =>
        item.id === productId ? { ...item, liked: nextLiked } : item,
      ),
    });

    return nextLiked;
  },

  getProductById: (productId) =>
    get().products.find((product) => product.id === productId),
}));
