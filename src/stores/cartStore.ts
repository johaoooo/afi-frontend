import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  nom: string;
  prix: number;
  image: string;
  quantite: number;
  categorie?: string;
}

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: Omit<CartItem, 'quantite'> & { quantite?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantite: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === item.id
                ? { ...i, quantite: i.quantite + (item.quantite || 1) }
                : i
            ),
          });
        } else {
          set({
            items: [...items, { ...item, quantite: item.quantite || 1 }],
          });
        }
        // Recalculer le total
        const newTotal = get().items.reduce(
          (sum, i) => sum + i.prix * i.quantite,
          0
        );
        set({ total: newTotal });
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
        const newTotal = get().items.reduce(
          (sum, i) => sum + i.prix * i.quantite,
          0
        );
        set({ total: newTotal });
      },

      updateQuantity: (id, quantite) => {
        if (quantite <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantite } : i
          ),
        });
        const newTotal = get().items.reduce(
          (sum, i) => sum + i.prix * i.quantite,
          0
        );
        set({ total: newTotal });
      },

      clearCart: () => set({ items: [], total: 0 }),

      getTotal: () => {
        return get().items.reduce((sum, i) => sum + i.prix * i.quantite, 0);
      },

      getTotalItems: () => {
        return get().items.reduce((sum, i) => sum + i.quantite, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
