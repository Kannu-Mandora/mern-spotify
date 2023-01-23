import React from "react";
import MobileNavbar from "../ui/Navigates/MobileNavbar";
import Navbar from "../ui/Navigates/Navbar";

const Navigation = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <MobileNavbar />
      {/* Big Screen Navbar */}
      <Navbar />
    </>
  );
};

export default Navigation;
