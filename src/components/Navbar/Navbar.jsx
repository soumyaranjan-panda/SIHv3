import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky px-24 top-0 z-40 bg-white shadow dark:bg-red-400/60  backdrop-blur-md">
      <div className="  container px-6 py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex flex-row justify-evenly gap-4" href="#">
              <img className="w-auto h-4 sm:h-5" src="./logoRakshak.png" alt="" />
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-200 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {/* Toggle menu icon */}
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <a
                href="#Working"
                className="px-2 py-1.5 mx-3 mt-2 text-gray-50 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-50  hover:bg-gray-100 dark:hover:bg-p8/70 dark:hover:drop-shadow-sm"
              >
                Working
              </a>
              <a
                href="#Maps"
                className="px-2 py-1.5 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-50  hover:bg-gray-100 dark:hover:bg-p8/70 dark:hover:drop-shadow-sm"
              >
                Maps
              </a>
              <a
                href="#Features"
                className="px-2 py-1.5 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-50  hover:bg-gray-100 dark:hover:bg-p8/70 dark:hover:drop-shadow-sm"
              >
                Features
              </a>
              <a
                href="#Testimonials"
                className="px-2 py-1.5 mx-3 mt-2 text-gray-200 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-50  hover:bg-gray-100 dark:hover:bg-p8/70 dark:hover:drop-shadow-sm"
              >
                Testimonials
              </a>
              <a
                href="#More"
                className="px-2 py-1.5 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-p8/70 dark:hover:drop-shadow-sm"
              >
                More
              </a>
            </div>

            <button className="px-2 py-1.5 font-medium tracking-wide text-red-400  capitalize transition-colors duration-300 transform bg-white/80 rounded-lg hover:bg-p11/70 hover:text-white ">
              Sign Up
            </button>
            <button className="px-2 py-1.5 mx-3 font-medium tracking-wide text-red-400  capitalize transition-colors duration-300 transform bg-white/80 rounded-lg hover:bg-p11/70 hover:text-white ">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
