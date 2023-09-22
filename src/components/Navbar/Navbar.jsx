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
    <nav className="sticky  top-0 z-50  bg-white shadow dark:bg-red-400/70  backdrop-blur-md">
      <div className="  container px-6 py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex flex-row justify-evenly gap-4" href="#">
              <img className="w-auto ml-24 h-6 sm:h-7" src="Logo.png" alt="" />
              <h1 className=" text-2xl">Name</h1>
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
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
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-500/60 dark:hover:drop-shadow-sm"
              >
                Working
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-500/60 dark:hover:drop-shadow-sm"
              >
                Maps
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-500/60 dark:hover:drop-shadow-sm"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-indigo-500/60 dark:hover:drop-shadow-sm"
              >
                More
              </a>
            </div>

            <button className="px-2 py-1.5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600/60 rounded-lg hover:bg-indigo-500/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Sign Up
            </button>
            <button className="px-2 py-1.5 mx-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600/60 rounded-lg hover:bg-indigo-500/80 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
