import React, { useState } from "react";
import logo from "../assets/logo/logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="px-[2vw] pt-5 bg-primary fixed w-full z-10">
      <nav className="bg-white border-gray-200 dark:bg-secondary rounded-2xl fixed w-[94vw] z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="TechNodes" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TechNodes
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full hover:scale-105"
                src="https://cdn-icons-png.flaticon.com/512/3291/3291667.png"
                alt="user photo"
              />
            </button>

            {isDropdownOpen && (
              <div
                className="z-50 absolute right-5 top-2 mt-16 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-secondary dark:divide-gray-800"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-secondary dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    Nishitbaria@gmail.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between max-md:hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-400 md:p-0 md:dark:white md:hover:text-black "
                  aria-current="page"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className="block py-2 pl-3 pr-4 text-textcolor rounded hover:textdark md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/Event"
                  className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black  md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/Team"
                  className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black  md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black  md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {Toggle && (
            <div
              className="items-center justify-between md:hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-secondary dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-400 md:p-0 md:dark:white"
                    aria-current="page"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="block py-2 pl-3 pr-4 text-textcolor rounded hover:textdark md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Event"
                    className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Team"
                    className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-secondary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-textdark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
