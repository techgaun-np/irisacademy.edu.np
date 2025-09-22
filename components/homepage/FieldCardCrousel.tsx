"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

type FieldCard = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const cards: FieldCard[] = [
  {
    id: 1,
    image: "/homepage/captain.jpg",
    title: "Skipper Shines",
    description: "Our captain led the charge with a steady 60 runs.",
  },
  {
    id: 2,
    image: "/homepage/captain.jpg",
    title: "Skipper Shines",
    description: "Our captain led the charge with a steady 60 runs.",
  },
  {
    id: 3,
    image: "/homepage/captain.jpg",
    title: "Skipper Shines",
    description: "Our captain led the charge with a steady 60 runs.",
  },
  {
    id: 4,
    image: "/homepage/captain.jpg",
    title: "Skipper Shines",
    description: "Our captain led the charge with a steady 60 runs.",
  },
  {
    id: 5,
    image: "/homepage/captain.jpg",
    title: "Skipper Shines",
    description: "Our captain led the charge with a steady 60 runs.",
  },
];

export default function FieldCardCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-card py-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Latest from the Arena
      </h2>

      <div className="relative">
        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-auto py-6 no-scrollbar space-x-10 pl-16 md:pl-24 pr-4"
          whileTap={{ cursor: "grabbing" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="w-[260px] flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-[470px] relative rounded-2xl border-none shadow-muted overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full rounded-2xl absolute w-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, #51A176 0%, transparent 40%)`,
                  }}
                />
                <div className="p-4 bottom-0 absolute">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Next Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
