import React from "react";
import Link from "./Link";

const Nav: React.FC = () => {
  return (
    <nav
      id="navbar"
      className="app-navbar flex items-center justify-between flex-wrap p-4"
    >
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/">
          <a>
            <div className="bg-blue-500 text-white text-xl font-semibold h-8 w-8 rounded-full flex items-center justify-center">
              <span>FB</span>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex items-center flex-shrink-0">
        <Link href="/resume" activeClassName="text-blue-600 font-semibold">
          <a className="text-xl hover:text-blue-500 ml-4">Resume</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
