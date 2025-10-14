"use client";
import { FestivalData } from "@/data/festivalData";
import { Suspense } from "react";
import FestivalListSkeleton from "./FestivalSkeleton";

const FestivalList = () => {
  return (
    <Suspense fallback={<FestivalListSkeleton />}>
      <FestivalListContent />
    </Suspense>
  );
};
const FestivalListContent = () => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const upcomingFestivals = FestivalData.filter((festival) => {
    const festivalDate = new Date(festival.date);
    festivalDate.setUTCHours(0, 0, 0, 0);
    return festivalDate >= today;
  });

  const nonHolidayFestivals = upcomingFestivals.filter((f) => !f.isHoliday);
  const holidayFestivals = upcomingFestivals.filter((f) => f.isHoliday);

  return (
    <div className="grid md:grid-cols-2 w-full gap-4 p-4 mt-2">
      {/* Left Column: Non-Holidays */}
      <div className="flex flex-col gap-3">
        {nonHolidayFestivals.map((festival, idx) => (
          <div key={idx} className="flex w-full gap-6 items-center">
            <span className="!text-primary !font-semibold text-base md:!text-xl">
              {festival.date.split("-")[2]}
            </span>
            <span className="!text-[#333333] text-base md:!text-lg ">
              {festival.name}
            </span>
          </div>
        ))}
      </div>

      {/* Right Column: Holidays */}
      <div className="flex flex-col gap-3 w-full">
        {holidayFestivals.slice(0, 10).map((festival, idx) => (
          <div key={idx} className="flex gap-6 items-center justify-start">
            <span className="!text-red-500 !font-semibold text-base md:!text-xl">
              {" "}
              {festival.date.split("-")[2]}
            </span>
            <span className="!text-[#333333] text-base  md:!text-lg ">
              {festival.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalList;
