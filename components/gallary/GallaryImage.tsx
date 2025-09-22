import React from "react";
import GallaryCommonImageContainer from "../common/GallaryCommonImageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallaryImage = () => {
  return (
    <div className=" py-10 ">
      <div className="container">
        <Tabs defaultValue="recent" className="w-[400px] mx-auto">
          <TabsList className="gap-4 mb-8">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="2024">2024</TabsTrigger>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2022">2022</TabsTrigger>
            <TabsTrigger value="2021">2021</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="md:flex md:flex-col mt-4 gap-2">
          {/* Map through your images here */}
          <div className="md:flex gap-2">
            <GallaryCommonImageContainer
              src="/gallary/gallary1.png"
              width={270}
              height={370}
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary2.png"
              width={265}
              height={370}
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary3.png"
              width={270}
              height={370}
            />

            <GallaryCommonImageContainer
              src="/gallary/gallary4.jpg"
              width={270}
              height={370}
            />
          </div>
          <div className="md:flex gap-2">
            <GallaryCommonImageContainer
              src="/gallary/gallary5.png"
              width={270}
              height={370}
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary6.png"
              width={265}
              height={370}
            />
            <GallaryCommonImageContainer
              src="/gallary/gallary7.png"
              width={270}
              height={370}
            />

            <GallaryCommonImageContainer
              src="/gallary/gallary8.jpg"
              width={270}
              height={370}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryImage;
