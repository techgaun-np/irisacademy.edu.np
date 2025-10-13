"use client";

import Image from "next/image";
import Link from "next/link";

const AboutContent = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl md:text-4xl text-[#19191A] font-extrabold text-center mb-4">
        About Iris Academy
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-2/3 space-y-4">
          <p className="text-gray-700 text-2xl md:text-3xl font-bold leading-relaxed">
            Nurturing the flame of curiosity within every student.
          </p>
          <p className="text-xl md:text-2xl text-[#313235] leading-relaxed">
            Founded with a vision to provide world-class education, Iris Academy
            has been nurturing young minds for over 15 years. We combine
            traditional values with modern teaching methodologies to create an
            environment where every student can thrive and reach their full
            potential.
          </p>
          <Link
            href="/our-team"
            className="inline-block bg-primary text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Our Team
          </Link>
        </div>

        {/* Image Content */}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <Image
            src="/hero-bg.png"
            alt="Iris Academy Building"
            width={400}
            height={300}
            className="rounded-none shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
