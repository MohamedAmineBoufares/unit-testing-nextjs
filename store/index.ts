import { create } from "zustand";

interface State {
  favs: string[];
  add: (item: string) => void;
}

const handleAdd = (state: State, item: string) => {
  const foundElement = state.favs.find((fav) => fav === item);

  if (foundElement) {
    return { favs: state.favs.filter((fav) => fav !== item) };
  }

  return { favs: [...state.favs, item] };
};

export const useStore = create<State>()((set) => ({
  favs: [],
  add: (item) => set((state) => handleAdd(state, item)),
}));
