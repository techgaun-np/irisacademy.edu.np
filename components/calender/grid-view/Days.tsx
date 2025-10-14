import { FestivalData } from "@/data/festivalData";
import { cn } from "@/lib/utils";
import { toNepaliNumber } from "@/services/helper/getNepaliMonth";
import { useMonthStore } from "@/services/zustand/useMonthStore";
import { NepaliDate } from "nepali-date-library";

const getFestival = (date: string) => {
  return FestivalData.find((festival) => festival.date === date);
};

const Days = () => {
  const nepaliToday = new NepaliDate();
  const { currentMonthIndex, nepaliYear } = useMonthStore(
    (state: { currentMonthIndex: number; nepaliYear: number }) => state
  );

  const displayedMonthDate = new NepaliDate(nepaliYear, currentMonthIndex, 1);
  const TotalDaysInMonth = displayedMonthDate.daysInMonth();
  const startDayOfWeek = displayedMonthDate.getDay();

  const daysArray: (number | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) daysArray.push(null);
  for (let d = 1; d <= TotalDaysInMonth; d++) daysArray.push(d);

  const isDisplayedMonthToday =
    nepaliToday.getYear() === nepaliYear &&
    nepaliToday.getMonth() === currentMonthIndex;

  return (
    <div className="grid grid-cols-7 md:gap-4 gap-2 h-full my-8">
      {daysArray.map((day, index) => {
        if (day === null) {
          return (
            <div
              key={index}
              className="lg:w-36 md:w-20 md:h-20 w-10 h-10 lg:h-36"
            />
          );
        }

        const isToday =
          isDisplayedMonthToday && day === nepaliToday.getDate()
            ? "bg-[#F1B904] !text-white"
            : "";

        const festival = getFestival(
          `${nepaliYear}-${String(currentMonthIndex + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`
        );
        const isFestival = festival ? "!text-red-500 border-red-500" : "";

        const dayDate = new NepaliDate(nepaliYear, currentMonthIndex, day);
        const isSaturday =
          dayDate.getDay() === 6 ? "!text-red-500 border-red-500" : "";

        return (
          <div
            key={index}
            className={cn(
              `text-[#707070] relative flex items-center justify-center text-sm md:text-base lg:w-36 lg:h-36 md:w-24 md:h-24 sm:w-16 h-11 sm:h-16   border border-red-100 rounded-sm ${isToday} ${isFestival} ${isSaturday}`
            )}
          >
            <span className={`nepali-date ${isSaturday} cursor-pointer`}>
              {toNepaliNumber(day)}
            </span>

            {festival && (
              <div className="absolute md:flex hidden bottom-1 left-2 text-xs text-white bg-red-500 p-1 rounded-sm">
                {festival.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Days;
