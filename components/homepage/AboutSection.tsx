"use client";

import { GraduationCap, Globe2, Users, ShieldUser } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="md:py-16 py-10 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <p className="text-primary font-semibold mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Shaping Minds, Inspiring Futures
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Iris Academy, we combine academic excellence with
              character-building values. Our goal is to create a nurturing
              environment where students grow into confident learners,
              compassionate citizens, and future leaders.
            </p>
          </div>

          {/* Right highlights */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#FFDD6E] p-3 rounded-2xl">
                <GraduationCap className="text-[#000000] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Over 27 Years of Academic Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  Proven experience in delivering quality education across
                  disciplines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FFDD6E] p-3 rounded-2xl">
                <Globe2 className="text-[#000000] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Global Perspective, Local Impact
                </h4>
                <p className="text-gray-600 text-sm">
                  Blending international standards with community-centered
                  values.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FFDD6E] p-3 rounded-2xl">
                <ShieldUser className="text-[#000000] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Faculty of Experts & Mentors
                </h4>
                <p className="text-gray-600 text-sm">
                  Passionate educators committed to student growth and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Puzzle Section */}
        <div className="md:flex hidden w-full justify-center mt-12">
          <Image
            src="/home/puzzle.png"
            alt="Puzzle"
            width={1000}
            height={1000}
            className="mb-4 max-w-5xl w-full"
          />
        </div>
        <div className="flex md:hidden w-full justify-center mt-12">
          <Image
            src="/home/puzzle-mbl.png"
            alt="Puzzle"
            width={1000}
            height={1000}
            className="mb-0 w-full"
          />
        </div>
      </div>
    </section>
  );
}
