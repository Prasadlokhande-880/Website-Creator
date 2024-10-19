import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { Button } from "./design/moving-border";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="z-[999] bg-[black] bg-opacity-50 backdrop-blur-lg border-opacity-20 shadow-lg fixed top-0 left-0 w-full">
      <nav className="flex justify-between items-center w-[100%]">
        <div>
          <img
            className="w-16 cursor-pointer mx-4 m-1"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="Logo"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[56vh] left-0 ${
            isMenuOpen
              ? "top-0 bg-[black] bg-opacity-50 backdrop-blur-lg border-opacity-20 shadow-lg"
              : "top-[-700%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 hover:cursor-pointer">
            <li>
              <Link
                className={`text-base font-light ${
                  isActiveLink("/")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-light ${
                  isActiveLink("/about")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-light ${
                  isActiveLink("/features")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-light ${
                  isActiveLink("/blog")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`text-base font-light ${
                  isActiveLink("/demo")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/demo"
              >
                Demo
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 m-2">
          <Button
            borderRadius="1.75rem"
            className="bg-[#f97346] hover:bg-[#ff622e] text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Sign in
          </Button>
          <IonIcon
            icon={menuOutline}
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
