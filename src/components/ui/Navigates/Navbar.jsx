import React from "react";
import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillLike,
} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-[#282A3A] text-white h-screen w-64 sticky inset-0">
          <div className="flexColCenter">
            <Link
              to="/"
              className="flex justify-start items-center text-3xl my-3 gap-4 "
            >
              <FaSpotify className="text-green-300" />
              <span>Restlify</span>
            </Link>
            <div className="flex flex-col my-3 gap-5">
              <Link to="/" className="flex items-center gap-4">
                <AiFillHome className="text-2xl" />
                <span className="text-sm">Home</span>
              </Link>
              <Link to="/Search" className="flex items-center gap-4">
                <AiOutlineSearch className="text-2xl" />
                <span className="text-sm">Search</span>
              </Link>
              <Link to="/Library" className="flex items-center gap-4">
                <BiLibrary className="text-2xl" />
                <span className="text-sm">Your library</span>
              </Link>
              <Link to="/Playlist" className="flex items-center gap-4">
                <AiOutlinePlus className="text-2xl bg-zinc-300 text-black p-0.5 rounded" />
                <span className="text-sm">Create Playlist</span>
              </Link>
              <Link to="/Likedsongs" className="flex items-center gap-4">
                <AiFillLike className="text-2xl" />
                <span className="text-sm">Liked Songs</span>
              </Link>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
