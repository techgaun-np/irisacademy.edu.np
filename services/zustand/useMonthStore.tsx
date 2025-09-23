import { create } from "zustand";
import { dateData } from "@/data/datesData"; // Import the month data to get the month name dynamically

type MonthStoreState = {
  currentMonthIndex: number;
  nepaliYear: number;
  trackerButton: string;
};

export const useMonthStore = create<
  MonthStoreState & {
    setMonthIndex: (index: number) => void;
    incrementMonth: () => void;
    decrementMonth: () => void;
    setYear: (newYear: number) => void;
    incrementYear: () => void;
    decrementYear: () => void;
  }
>((set) => ({
  currentMonthIndex: 0,
  nepaliYear: 2082,
  trackerButton: "null",

  setMonthIndex: (index: number) => set({ currentMonthIndex: index }),

  incrementMonth: () =>
    set((state: MonthStoreState) => {
      const nextIndex = (state.currentMonthIndex + 1) % 12;
      let newYear = state.nepaliYear;

      if (dateData[state.currentMonthIndex].month === "चैत") {
        newYear += 1; // Increment year when moving from Chaitra to Baisakh
      }

      return { currentMonthIndex: nextIndex, nepaliYear: newYear };
    }),

  decrementMonth: () =>
    set((state: MonthStoreState) => {
      const prevIndex = (state.currentMonthIndex - 1 + 12) % 12;
      let newYear = state.nepaliYear;

      if (dateData[state.currentMonthIndex].month === "वैशाख") {
        newYear -= 1; // Decrement year when moving from Baisakh to Chaitra
      }

      return { currentMonthIndex: prevIndex, nepaliYear: newYear };
    }),

  setYear: (newYear: number) => set({ nepaliYear: newYear }),
  incrementYear: () =>
    set((state: MonthStoreState) => ({ nepaliYear: state.nepaliYear + 1 })),
  decrementYear: () =>
    set((state: MonthStoreState) => ({ nepaliYear: state.nepaliYear - 1 })),
}));
