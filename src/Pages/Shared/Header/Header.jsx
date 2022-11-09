import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className=" mx-auto">
        <div className="navbar bg-[#274c77] ">
          <div className="flex-1">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-white font-bold text-xl"
            >
              ACCOUNTANT
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li className="text-white">
                <Link to="/">Login</Link>
              </li>

              <li className="text-white">
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
