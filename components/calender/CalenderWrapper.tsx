"use client";
import CalenderComponent from "./Calender";
import CalenderProgramList from "./CalenderProgramList";

const CalenderWrapper = () => {
  return (
    <div className="text-center max-w-7xl mx-auto py-16">
      <h1 className="text-4xl font-extrabold">School Calendar</h1>
      <CalenderComponent />

      <CalenderProgramList />
    </div>
  );
};

export default CalenderWrapper;
