// components/AcademySection.js
import Image from "next/image";

const AcademySection = () => {
  return (
    <div className="container  mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <p className="text-primary font-semibold mb-2">What We Do</p>
          <h3 className="text-2xl font-semibold mt-2">
            Shaping Minds, Inspiring Futures
          </h3>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            At Iris Academy, we go beyond traditional teaching to create a
            dynamic learning environment where every student can thrive. We
            provide a balanced blend of academics, extracurricular activities,
            and character development programs that prepare students for life
            inside and outside the classroom. Our approach focuses on fostering
            curiosity, discipline, and creativity — ensuring that each child is
            not only equipped with knowledge but also with the values and
            confidence to lead and succeed.
          </p>
        </div>
        <div className="  md:w-[500px] ml-10 p-4">
          <div className="bg-[#F1B90466] md:w-[500px] relative rounded-4xl p-4">
            <Image
              src="/home/solar-system-model.png" // Replace with your image path
              alt="Solar System Model"
              width={400}
              height={300}
              className=" translate-x-[-12%] md:w-[500px] md:h-[300px] rounded-4xl translate-y-[-10%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademySection;
