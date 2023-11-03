import React from "react";
import { IconMenu2, IconTestPipe } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <IconMenu2 size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Create User</a>
            </li>
            <li>
              <a>Update User</a>
            </li>
            <li>
              <a>Delete User</a>
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <IconTestPipe className="text-white" size={24} />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Create User</a>
          </li>
          <li>
            <a>Update User</a>
          </li>
          <li>
            <a>Delete User</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
