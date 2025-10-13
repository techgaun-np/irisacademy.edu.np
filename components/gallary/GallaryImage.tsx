import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GallaryCommonImageContainer from "../common/GallaryCommonImageContainer";

const GallaryImage = () => {
  return (
    <div className=" py-10 ">
      <div className="container">
        <Tabs
          defaultValue="recent"
          className="w-[200px] md:w-[400px] md:mx-auto"
        >
          <TabsList className="md:gap-4 mb-8">
            <TabsTrigger className="text-sm md:text-base" value="recent">
              Recent
            </TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="2024">
              2024
            </TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="2023">
              2023
            </TabsTrigger>
            <TabsTrigger className="text-sm md:text-base" value="2022">
              2022
            </TabsTrigger>
            <TabsTrigger
              className="text-sm md:text-base md:flex hidden"
              value="2021"
            >
              2021
            </TabsTrigger>
          </TabsList>
        </Tabs>
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

export default GallaryImage;
