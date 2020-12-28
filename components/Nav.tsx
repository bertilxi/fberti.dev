import React from "react";
import dynamic from "next/dynamic";
import Link from "./Link";

const DarkMode = dynamic(() => import("./DarkMode"), { ssr: false });

const Nav: React.FC = () => (
  <nav
    id="navbar"
    className="app-navbar flex items-center justify-between flex-wrap p-4"
  >
    <div className="flex items-center flex-shrink-0 mr-6">
      <Link href="/">
        <a>
          <div className="bg-primary-500 text-white text-xl font-medium h-8 w-8 rounded-full flex items-center justify-center">
            <span>FB</span>
          </div>
        </a>
      </Link>
    </div>
    <div className="flex items-center flex-shrink-0">
      <DarkMode />

      <Link
        href="/resume"
        activeClassName="text-primary-600 dark:text-primary-400"
      >
        <a className="text-xl hover:font-medium ml-4">Resume</a>
      </Link>
    </div>
  </nav>
);

export default Nav;
