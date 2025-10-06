// components/PrincipalMessageComponent.js
import Image from "next/image";

const PrincipalMessageComponent = () => {
  return (
    <div className="relative mx-auto p-4 bg-[#F9E39B66] rounded-lg flex flex-col md:flex-row items-center">
      <div className="container overflow-hidden flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/home/principle1.png" // Replace with your image path
            alt="Principal Jane Doe"
            width={300}
            height={400}
            className="rounded-full md:w-[500px] translate-x-[-70px] md:translate-x-[-150px]"
          />
        </div>
        <div className="md:w-1/2 md:translate-x-[-100px] p-4">
          <h2 className="text-xl font-bold text-[#313235]">
            Message from the Principal
          </h2>
          <blockquote className="mt-2 italic text-gray-700 border-l-4 text-base md:text-xl border-yellow-600 pl-4">
            “Welcome to Iris Academy, a community where learning meets values.
            At our school, education is more than academics — it is about
            nurturing curiosity, discipline, and creativity while instilling
            compassion and integrity. With the guidance of our dedicated
            faculty, we strive to create an environment where every student
            feels supported and inspired to reach their full potential.
            Together, we are shaping responsible citizens and future leaders who
            will positively impact the world.”
          </blockquote>
          <p className="mt-4 text-left text-gray-700 text-lg md:text-xl font-bold">
            An academy where learning sparks leadership
            <br />- Jane Doe
          </p>
        </div>
      </div>
      <div className="absolute  top-4 right-6 grid-cols-3 hidden md:grid gap-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="#FFD578" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrincipalMessageComponent;
