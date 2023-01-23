import React from "react";
import Navigation from "../shared/Navigation";
import PreNavbar from "../ui/Navigates/PreNavbar";

const MainPanel = () => {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex flex-col w-full">
          <PreNavbar />
        </div>
      </div>
    </>
  );
};

export default MainPanel;
