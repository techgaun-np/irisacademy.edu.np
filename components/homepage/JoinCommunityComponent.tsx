// components/JoinCommunityComponent.js
import Image from "next/image";
import Link from "next/link";

const JoinCommunityComponent = () => {
  return (
    <div className="relative bg-gray-800 text-white p-4 md:p-8 flex items-center justify-between">
      <div className="flex md:flex-row flex-col gap-6 justify-center container items-center">
        <Image
          src="/home/community-bg.jpg" // Replace with your image path
          alt="Community Background"
          width={1200}
          height={200}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10">
          <h2 className="text-xl font-bold">Ready to Join Our Community?</h2>
          <p className="mt-2 text-sm md:text-base md:w-[70%]">
            Take the first step towards your child&apos;s bright future. Get in
            touch with us to learn more about our programs, facilities, and
            admission process.
          </p>
        </div>
        <Link
          className="relative z-10 bg-primary text-black font-semibold py-2 px-8 rounded-2xl hover:bg-yellow-600 transition"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default JoinCommunityComponent;
