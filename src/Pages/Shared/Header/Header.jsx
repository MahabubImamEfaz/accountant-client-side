import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="bg-[#E7ECEF]">
      <div className=" mx-auto ">
        <div className="navbar bg-[#274c77] ">
          <div className="flex-1 ">
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
                {user?.email ? (
                  <>
                    <Link to="/reviews">Review</Link>
                    <Link to="/login">
                      <button onClick={handleLogOut} className="btn-ghost ">
                        Logout
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link to="/login">Login</Link>
                )}
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
