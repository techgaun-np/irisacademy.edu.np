// components/team-section.tsx

"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Gina Caselangelo",
    role: "Science HOD",
    image: "/team/team.jpg",
  },
  {
    name: "Gina Caselangelo",
    role: "Science HOD",
    image: "/team/team.jpg",
  },
  {
    name: "Gina Caselangelo",
    role: "Science HOD",
    image: "/team/team.jpg",
  },
  {
    name: "Gina Caselangelo",
    role: "Science HOD",
    image: "/team/team.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mb-10 flex md:flex-row flex-col text-center md:text-left">
          <div className="md:w-1/2">
            <p className="text-sm font-semibold text-primary">Meet Our Team</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Good Education Starts From Great Teachers
            </h2>
          </div>

          <p className="mt-4 md:w-1/2 text-gray-600 text-sm leading-relaxed">
            At Hrs Academy, we combine academic excellence with
            character-building values. Our goal is to create a nurturing
            environment where students grow into confident learners,
            compassionate citizens, and future leaders.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden py-0 relative h-[360px] max-w-[360px] bg-white shadow-sm border"
            >
              <div className="">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full absolute h-full object-center object-cover bg-center"
                />
                <CardContent
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.17) 11.21%, rgba(255, 255, 255, 0.35) 22.42%)",
                  }}
                  className="p-4 absolute bottom-0 z-10 w-full text-start"
                >
                  <CardTitle className="text-lg text-[#000000]">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-[#000000]">{member.role}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
