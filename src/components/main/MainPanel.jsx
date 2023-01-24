import React from "react";
import Navigation from "../shared/Navigation";
import PreNavbar from "../ui/Navigates/PreNavbar";

const MainPanel = () => {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex flex-col w-full bg-gradient-to-b from-sky-300 to-blue-500">
          <PreNavbar />
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPanel;
