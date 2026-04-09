import { create } from 'zustand';

type SessionState = {
  selectedMatchId: string | null;
  setSelectedMatchId: (id: string | null) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  selectedMatchId: null,
  setSelectedMatchId: (id) => set({ selectedMatchId: id })
}));
