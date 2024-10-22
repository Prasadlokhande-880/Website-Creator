import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import { Button } from "./design/moving-border";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../database/firebaseConfig";
import { Menu, Transition } from "@headlessui/react"; // For dropdown

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => location.pathname === path;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the logged-in user
    });

    return () => unsubscribe();
  }, []);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

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
            <li>
              {" "}
              <Link
                className={`text-base font-light ${
                  isActiveLink("/demo")
                    ? "text-white"
                    : "text-gray-300 hover:text-gray-100"
                }`}
                to="/CustomComponents"
              >
                Custom Components
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 m-2">
          {user ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex items-center text-white">
                  {user.displayName || "User"}
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 mr-4">
                  <div className="px-4 py-3">
                    <p className="text-sm">Signed in as</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.email}
                    </p>
                  </div>
                  <div className="py-4">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-gray-100" : ""
                          } text-gray-700 block px-4 py-2 text-sm w-full text-left`}
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link to="/login">
              <Button
                borderRadius="1.75rem"
                className="bg-[#f97346] hover:bg-[#ff622e] text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Sign in
              </Button>
            </Link>
          )}
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
