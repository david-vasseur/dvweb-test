import { create } from "zustand";

type PinState = {
    isPinned: string;
    setPinned: (value: string) => void;
};

export const usePinStore = create<PinState>((set) => ({
    isPinned: "false",
    setPinned: (value) => set({ isPinned: value }),
}));