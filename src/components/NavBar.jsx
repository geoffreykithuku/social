// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { SocialContext } from "../context/socialcontext";
const NavBar = () => {
  const { handleLogout } = React.useContext(SocialContext);

  return (
    <nav className="bg-gray-800 h-fit rounded w-fit px-10 max-w-[300px] fixed left-0 top-0 p-4 text-white ml-5 mt-10 ">
      <ul className="space-y-4 w-full">
        <li className="w-full border-gray-800 rounded px-5 py-1">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="w-full border-gray-800 rounded px-5 py-1">
          <Link to="#" className="">
            Post
          </Link>
        </li>
        <li className="w-full border-gray-800 rounded px-5 py-1">
          <Link to="#" className="">
            Profile
          </Link>
        </li>
        <li className="w-full border-gray-800 rounded px-5 py-1">
          <p onClick={() => handleLogout()} className="cursor-pointer">
            Logout
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
