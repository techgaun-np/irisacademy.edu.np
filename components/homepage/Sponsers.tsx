import React from "react";
import Image from "next/image";

const sponsors = [
  { name: "Om Hospital", logo: "/sponsors/om-hospital.png" },
  { name: "Himalaya Pulse", logo: "/sponsors/himalaya-pulse.png" },
  { name: "Techgaun", logo: "/sponsors/techgaun.png" },
  { name: "RamroLink", logo: "/sponsors/ramrolink.png" },
  { name: "S.R.P Group", logo: "/sponsors/srp-group.png" },
];

const Sponsers = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #194C4F 0%, #0C898D 50%, #0EEFFF 100%)",
      }}
      className="relative py-8"
    >
      {/* Background big text */}
      <h1 className="absolute top-10 right-10 text-[150px] font-bold text-white/10 tracking-wide">
        SPONSORS
      </h1>

      <div className="container mx-auto py-16 px-6 grid md:grid-cols-5 gap-6 items-center relative z-10">
        {/* Left Section */}
        <div className="col-span-2">
          <h2 className="text-white text-5xl font-bold">
            Our Proud <br /> <span className="text-black">Sponsors </span>
            for the Indoor Super League (ISL) 2025
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-sm">
            We&apos;re backed by brands that believe in our journey
          </p>
        </div>

        {/* Right Section - Logos */}
        <div className="col-span-3 flex flex-wrap justify-center gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 w-[120px] md:w-[200px]"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={80}
                quality={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
