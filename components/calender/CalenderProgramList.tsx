import React from "react";
import FestivalList from "./FestivalList";

const CalenderProgramList = () => {
  return (
    <div className="mt-6 flex flex-col justify-center items-center">
      <h1 className=" w-full text-start">Program Roster</h1>
      <FestivalList />
    </div>
  );
};

export default CalenderProgramList;
