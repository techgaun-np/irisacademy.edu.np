import React from "react";
import FestivalList from "./FestivalList";

const CalenderProgramList = () => {
  return (
    <div className="md:mt-6 mt-2 flex flex-col justify-center items-center">
      <h1 className=" w-full px-4 text-start">Program Roster</h1>
      <FestivalList />
    </div>
  );
};

export default CalenderProgramList;
