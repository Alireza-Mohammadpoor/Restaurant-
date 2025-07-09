import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((x) => x.id === item.id);
      if (existing) {
        return {
          items: state.items.map((x) =>
            x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((x) => x.id !== id),
    })),

  increment: (id) =>
    set((state) => ({
      items: state.items.map((x) =>
        x.id === id ? { ...x, quantity: x.quantity + 1 } : x
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      items: state.items
        .map((x) =>
          x.id === id ? { ...x, quantity: x.quantity - 1 } : x
        )
        .filter((x) => x.quantity > 0),
    })),
}));
export default useCartStore;
