import GallaryCommonImageContainer from "../common/GallaryCommonImageContainer";

const Gallary = () => {
  return (
    <div className=" py-10 ">
      <div className="container">
        <h1 className="text-2xl font-bold text-center mb-8">
          In a <span className="text-primary">Glimpse</span>
        </h1>
        <div className="md:flex md:flex-col mt-4 gap-2">
          {/* Map through your images here */}
          <div className="md:flex gap-2">
            <GallaryCommonImageContainer
              src="/gallary/gallary1.png"
              width={375}
              height={370}
              imageClassName="h-[364px] w-full md:w-[666px]"
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary2.png"
              width={265}
              height={370}
              imageClassName="h-[364px] w-full md:w-[266px]"
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary3.png"
              width={270}
              height={370}
              imageClassName="h-[364px] w-full md:w-[270px]"
            />

            <GallaryCommonImageContainer
              src="/gallary/gallary4.png"
              width={270}
              height={370}
              imageClassName="h-[364px] w-full md:w-[270px]"
            />
          </div>
          <div className="md:flex gap-2">
            <GallaryCommonImageContainer
              src="/gallary/gallary5.png"
              width={270}
              height={370}
              imageClassName="h-[364px] w-full md:w-[270px]"
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary6.png"
              width={265}
              height={370}
              imageClassName="h-[364px] w-full md:w-[270px]"
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary7.png"
              width={270}
              height={370}
              imageClassName="h-[364px] w-full md:w-[470px]"
            />

            <GallaryCommonImageContainer
              src="/gallary/gallary8.png"
              width={270}
              height={370}
              imageClassName="h-[364px] w-full md:w-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
