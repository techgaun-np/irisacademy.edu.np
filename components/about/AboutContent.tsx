"use client";

import Image from "next/image";
import Link from "next/link";

const AboutContent = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-center md:text-left">
            About <span className="text-green-600">Iris</span>Academy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nurturing the flame of curiosity within every student.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with a vision to provide world-class education, Iris Academy
            has been nurturing young minds for over 15 years. We combine
            traditional values with modern teaching methodologies to create an
            environment where every student can thrive and reach their full
            potential.
          </p>
          <Link
            href="/our-team"
            className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Our Team
          </Link>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
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
