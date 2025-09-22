// components/PrincipalMessageComponent.js
import Image from "next/image";

const PrincipalMessageComponent = () => {
  return (
    <div className=" mx-auto p-4 bg-yellow-50 rounded-lg flex flex-col md:flex-row items-center">
      <div className="container overflow-hidden flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/home/principle.png" // Replace with your image path
            alt="Principal Jane Doe"
            width={300}
            height={400}
            className="rounded-full w-[500px] translate-x-[-150px]"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-xl font-bold text-yellow-600">
            Message from the Principal
          </h2>
          <blockquote className="mt-2 italic text-gray-700 border-l-4 border-yellow-600 pl-4">
            “Welcome to Iris Academy, a community where learning meets values.
            At our school, education is more than academics — it is about
            nurturing curiosity, discipline, and creativity while instilling
            compassion and integrity. With the guidance of our dedicated
            faculty, we strive to create an environment where every student
            feels supported and inspired to reach their full potential.
            Together, we are shaping responsible citizens and future leaders who
            will positively impact the world.”
          </blockquote>
          <p className="mt-4 text-right text-gray-700 font-semibold">
            An academy where learning sparks leadership
            <br />- Jane Doe
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessageComponent;
