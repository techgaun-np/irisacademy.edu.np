import { create } from "zustand";
import { NepaliDate } from "nepali-date-library";
import { dateData } from "@/data/datesData";

const today = new NepaliDate(); // e.g. "Ashwin 8, 2081"

type MonthStoreState = {
  currentMonthIndex: number;
  nepaliYear: number;
  trackerButton: string;
  month?: string;
};

export const useMonthStore = create<
  MonthStoreState & {
    setMonthIndex: (index: number) => void;
    setMonth: (month: string) => void;
    incrementMonth: () => void;
    decrementMonth: () => void;
    setYear: (newYear: number) => void;
    incrementYear: () => void;
    decrementYear: () => void;
  }
>((set) => ({
  // 🔥 initialize from today's Nepali date
  currentMonthIndex: today.getMonth(), // 0–11
  month: dateData[today.getMonth()]?.month, // e.g. "आश्विन"
  nepaliYear: today.getYear(), // e.g. 2081
  trackerButton: "null",

  setMonthIndex: (index: number) =>
    set({
      currentMonthIndex: index,
      month: dateData[index]?.month, // keep month name synced
    }),

  setMonth: (month: string) => set({ month }),

  incrementMonth: () =>
    set((state: MonthStoreState) => {
      const nextIndex = (state.currentMonthIndex + 1) % 12;
      let newYear = state.nepaliYear;

      if (dateData[state.currentMonthIndex].month === "चैत") {
        newYear += 1; // Increment year when moving from Chaitra to Baisakh
      }

      return {
        currentMonthIndex: nextIndex,
        nepaliYear: newYear,
        month: dateData[nextIndex]?.month,
      };
    }),

  decrementMonth: () =>
    set((state: MonthStoreState) => {
      const prevIndex = (state.currentMonthIndex - 1 + 12) % 12;
      let newYear = state.nepaliYear;

      if (dateData[state.currentMonthIndex].month === "वैशाख") {
        newYear -= 1; // Decrement year when moving from Baisakh to Chaitra
      }

      return {
        currentMonthIndex: prevIndex,
        nepaliYear: newYear,
        month: dateData[prevIndex]?.month,
      };
    }),

  setYear: (newYear: number) => set({ nepaliYear: newYear }),
  incrementYear: () =>
    set((state: MonthStoreState) => ({ nepaliYear: state.nepaliYear + 1 })),
  decrementYear: () =>
    set((state: MonthStoreState) => ({ nepaliYear: state.nepaliYear - 1 })),
}));
