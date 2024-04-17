import { create } from 'zustand';

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisible: (isVisiblePlayer: boolean) => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: true,
  setIsVisible: (isVisiblePlayer) => set({ isVisiblePlayer }),
}));

export default usePlayerState;
