import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dateData } from "@/data/datesData";
import { useMonthStore } from "@/services/zustand/useMonthStore";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import "nepali-calendar-react/dist/index.css";
import { MONTH_EN, NepaliDate } from "nepali-date-library";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Days from "./grid-view/Days";
import Week from "./grid-view/Week";

const CalenderComponent = () => {
  const {
    currentMonthIndex,
    incrementMonth,
    decrementMonth,
    nepaliYear,
    setMonthIndex,
    setYear,
  } = useMonthStore((state) => state);

  const currentMonthData = dateData[currentMonthIndex];
  const nepaliMonth = currentMonthData
    ? currentMonthData.month
    : "Invalid Month";
  const prevMonthIndexRef = useRef<number | null>(null);
  const today = new NepaliDate();
  const currentNepaliYear = today.getYear();
  const startYear = currentNepaliYear - 10;
  const endYear = currentNepaliYear;
  const nepali = today.format("mmmm dd, yyyy");

  useEffect(() => {
    prevMonthIndexRef.current = currentMonthIndex;
  }, [currentMonthIndex]);

  return (
    <div className="max-w-7xl px-4 flex flex-col mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex gap-2">
          <h1>Today:</h1>
          <p className="!text-[#313235] !font-bold">
            {nepali} | {today.toString()}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={decrementMonth}>
            <ChevronsLeft />
          </Button>
          <div className="flex w-44 gap-4 items-center justify-center">
            <Select
              value={MONTH_EN[currentMonthIndex]} // controlled value
              onValueChange={(value) => {
                const newIndex = MONTH_EN.indexOf(value); // find the month index
                if (newIndex !== -1) setMonthIndex(newIndex);
              }}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {MONTH_EN.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* <CustomPageHeader title={nepaliMonth} /> */}

            <Select
              value={nepaliYear.toString()} // controlled value
              onValueChange={(value) => setYear(parseInt(value, 10))}
            >
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: endYear - startYear + 1 },
                  (_, i) => startYear + i
                ).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="ghost" onClick={incrementMonth}>
            <ChevronsRight />
          </Button>
        </div>

        {/* )} */}
      </div>
      <div className="justify-center items-center mt-4 mb-4 ">
        <Week />
        <Days />
      </div>
    </div>
  );
};

export default CalenderComponent;
