import React, { useState } from "react";

const TabButton = ({ children, isActive, onClick }) => (
  <div
    className={`justify-center px-3 py-2 bg-white rounded-2xl border border-solid shadow-sm ${
      isActive
        ? "text-customblue border-customblue"
        : "text-zinc-400 border-stone-300"
    }`}
    onClick={onClick}
  >
    {children}
  </div>
);

const tabs = [
  { label: "Student Details" },
  { label: "Parents Details" },
  { label: "Documents" },
];

const loaderPositions = [
  { left: "0%", width: "159px" },
  { left: "43%", width: "158px" },
  { right: "0%", width: "120px" },
];

const StudentListPagination = ({ activeIndex, handleTabClick }) => {
  return (
    <div className="flex flex-col justify-between w-full">
      <nav className="flex gap-1 justify-between w-full text-xl font-bold leading-6 text-center max-md:flex-wrap max-w-full">
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            isActive={index === activeIndex}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </nav>
      <div className="relative w-full mt-4 bg-zinc-100 rounded-[99px] max-md:pr-5 max-md:max-w-full h-[8px]">
        <div
          className="absolute h-full bg-customblue rounded-3xl"
          style={loaderPositions[activeIndex]}
        />
        <div className="h-2" />
      </div>
      {/* <button class="btn" id="prev" disabled>Prev</button> */}
      {/* <button className="btn" id="next" onClick={handleNext}>Next</button>  */}
    </div>
  );
};

export default StudentListPagination;
