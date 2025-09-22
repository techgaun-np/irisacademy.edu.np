import React from "react";
import Calender from "./Calender";
import CalenderProgramList from "./CalenderProgramList";

const CalenderWrapper = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-extrabold">School Calendar</h1>
      <Calender />
      <CalenderProgramList />
    </div>
  );
};

export default CalenderWrapper;
