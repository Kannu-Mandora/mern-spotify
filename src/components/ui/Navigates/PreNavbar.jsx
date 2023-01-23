import React, { useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PreNavbar = () => {
  const onScroll = () => {
    const preNavbar = document.querySelector(".preNavbar");
    window.scrollY > 50
      ? preNavbar.classList.add("bg-zinc-300")
      : preNavbar.classList.remove("bg-zinc-300");
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="preNavbar flex justify-between items-center transition-all ease-in-out duration-300 sticky top-0">
        <div className="flexRowCenter mx-2 gap-5">
          <Link to="/">
            <BsFillArrowLeftCircleFill className="text-2xl text-black" />
          </Link>
          <Link to="/">
            <BsFillArrowRightCircleFill className="text-2xl text-black" />
          </Link>
        </div>
        <div className="flexRowCenter p-3 gap-3">
          <Link
            to="/"
            className="py-1 px-4 rounded-2xl border-2 transition-transform hover:scale-105"
          >
            Upgrade
          </Link>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <BsFillPersonFill className="text-2xl" />
            </MenuButton>
            <MenuList>
              <MenuItem><Link to="/Account">Account</Link></MenuItem>
              <MenuItem><Link>Profile</Link></MenuItem>
              <MenuItem><Link>Upgrade To Premium</Link></MenuItem>
              <MenuItem><Link>Settings</Link></MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default PreNavbar;
