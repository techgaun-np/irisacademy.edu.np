import Image from "next/image";

const ChairPersonMessageComponent = () => {
  return (
    <div className="relative mx-auto p-4 md:p-12 bg-white rounded-lg flex flex-col md:flex-row items-center">
      <div className="container overflow-hidden flex flex-col md:flex-row items-center">
        <div className="absolute  top-12 left-6 grid-cols-3 hidden md:grid gap-3">
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
        <div className="md:w-1/2 md:translate-x-[100px] p-4">
          <h2 className="text-xl font-bold text-[#313235]">
            Message from the Chairperson
          </h2>
          <blockquote className="mt-2 italic text-gray-700 border-l-4 text-base md:text-xl border-yellow-600 pl-4">
            “At Iris Academy, we believe education is the foundation for
            transforming lives and communities. Our goal is to provide students
            with opportunities that encourage them to think critically, act
            responsibly, and lead with empathy. As we continue to grow, we
            remain committed to upholding academic excellence while nurturing
            the moral and social values that define true leadership. Together
            with our dedicated teachers and supportive parents, we strive to
            prepare our students not just for success, but for significance in
            the world beyond the classroom.”
          </blockquote>
          <p className="mt-4 text-left text-gray-700 text-lg md:text-xl font-bold">
            Guiding minds, inspiring change
            <br />- Sindhu Jalesa Budhathoki
          </p>
        </div>

        <div className="md:w-1/2 p-4">
          <Image
            src="/team/chairperson.png"
            alt="Chairperson Sindhu Jalesa Budhathoki"
            width={300}
            height={400}
            className="rounded-full md:w-[500px]  md:translate-x-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChairPersonMessageComponent;
