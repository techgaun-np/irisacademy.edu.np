import { dateData } from "@/data/datesData";
import { daysData } from "@/data/daysData";
import { FestivalData } from "@/data/festivalData";
import { cn } from "@/lib/utils";
import { useMonthStore } from "@/services/zustand/useMonthStore";
import Image from "next/image";
import { NepaliDate } from "nepali-date-library";

const Days = () => {
  const nepaliToday = new NepaliDate(); // gives today's Nepali date

  const today = new Date().toISOString().split("T")[0];
  const { currentMonthIndex } = useMonthStore((state: any) => state);

  const activeMonthData = dateData[currentMonthIndex];

  if (!activeMonthData) {
    return <div>No data available for the current date.</div>;
  }

  const { startEnglishDate, endEnglishDate } = activeMonthData;
  const startDate = new Date(startEnglishDate);
  const endDate = new Date(endEnglishDate);
  const startDayOfWeek = startDate.getDay();
  const days = [];
  let nepaliDate = 1;

  for (let i = 0; i < startDayOfWeek; i++) {
    days.push(null);
  }

  while (startDate <= endDate) {
    days.push({ date: new Date(startDate), nepaliDate });
    startDate.setDate(startDate.getDate() + 1);
    nepaliDate++;
  }

  const getFestival = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    return FestivalData.find((festival) => festival.date === dateStr);
  };

  const getNepaliDay = (englishDay: number) => {
    const day = daysData.find((item) => item.english === String(englishDay));
    return day ? day.nepali : englishDay;
  };

  return (
    <div className="grid grid-cols-7 gap-4 h-full my-8">
      {days.map((dayObj, index) => {
        if (!dayObj) {
          return <div key={index} className="border border-transparent" />;
        }

        const { date, nepaliDate } = dayObj;
        const isToday =
          date.toISOString().split("T")[0] === today
            ? "bg-[#F1B904] !text-white"
            : "";
        const festival = getFestival(date);
        const isFestival = festival ? "!text-red-500 border-red-500" : "";

        // ✅ Check if Saturday
        const isSaturday =
          date.getDay() === 6 ? "!text-red-500 border-red-500 " : "";

        return (
          <div
            key={index}
            className={cn(
              `text-[#707070] relative text-base w-36 h-36  border border-red-100 rounded-sm ${isToday} ${isFestival} ${isSaturday}`
            )}
          >
            <span className={`nepali-date  ${isSaturday} cursor-pointer`}>
              {getNepaliDay(nepaliDate)}
            </span>

            {festival && (
              <div className="">
                <div className="absolute hidden md:flex bottom-1 left-2 text-xs text-white bg-red-500 p-1 rounded-sm">
                  {festival.name}
                </div>
                {festival.imgSrc && (
                  <div className="">
                    <Image
                      src={`/${festival.imgSrc}`}
                      alt={festival.name}
                      width={40}
                      height={40}
                      className="bg-amber-300 w-36 h-16"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Days;
