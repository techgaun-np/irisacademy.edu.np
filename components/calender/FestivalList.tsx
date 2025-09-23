"use client";
import { FestivalData } from "@/data/festivalData";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import FestivalListSkeleton from "./FestivalSkeleton";

const FestivalList = () => {
  return (
    <Suspense fallback={<FestivalListSkeleton />}>
      <FestivalListContent />
    </Suspense>
  );
};

const FestivalListContent = () => {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name")?.toLowerCase();
  const monthParam = searchParams.get("month")?.toLowerCase();

  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const filteredFestivals = FestivalData.filter((festival) => {
    const festivalDate = new Date(festival.date);
    festivalDate.setUTCHours(0, 0, 0, 0);
    const isUpcoming = festivalDate >= today;

    const matchesName =
      !nameParam || festival.title.toLowerCase().includes(nameParam);

    const matchesMonth = !monthParam || festival.month.includes(monthParam);

    return isUpcoming && matchesName && matchesMonth;
  });

  return (
    <div className="py-2 w-full mt-2">
      {/* <CustomPageHeader title={`आगामी चाडपर्वहरू`} /> */}
      <div className="grid gap-4">
        {filteredFestivals.length > 0 ? (
          filteredFestivals.map((festival, index) => (
            <FestivalItem key={index} festival={festival} />
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p>{`खोजका मापदण्ड अनुरूप कुनै चाडपर्व फेला परेन।`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface Festival {
  name: string;
  description: string;
  date: string;
}

const FestivalItem = ({ festival }: { festival: Festival }) => {
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false); // Reset the animation when it leaves the viewport
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the item is in view
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`text-gray-400  grid grid-cols-2 py-2 justify-between items-center gap-6 transform transition-opacity duration-1000 ease-in-out`}
    >
      <div className="flex  gap-6">
        <h3 className="text-primary">
          {festival.date}{" "}
          {/* <span>  
          {new Date(festival.date).toLocaleString("ne-NP", {
            weekday: "long",
          })}
        </span> */}
        </h3>
        <div>
          <h1 className="text-[#333333]">{festival.name}</h1>
          {/* <p className="text-muted-foreground">{festival.description}</p> */}
        </div>
      </div>
      <div className="flex  gap-6">
        <h3 className="text-red-500">
          {festival.date}{" "}
          {/* <span>  
          {new Date(festival.date).toLocaleString("ne-NP", {
            weekday: "long",
          })}
        </span> */}
        </h3>
        <div>
          <h1 className="text-[#333333]">{festival.name}</h1>
          {/* <p className="text-muted-foreground">{festival.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default FestivalList;
