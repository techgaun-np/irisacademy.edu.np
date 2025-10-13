import React from "react";
import GallaryCommonImageContainer from "../common/GallaryCommonImageContainer";

const GallaryImage = () => {
  return (
    <div className=" py-10 ">
      <div className="container">
        <h1 className="text-xl md:text-3xl text-center font-bold ">
          IA in a <span>Glimpse</span>
        </h1>
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
