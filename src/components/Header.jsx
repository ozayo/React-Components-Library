import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/oo-logo.svg";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="py-4 md:py-8 px-4 md:px-0">
      <div className="flex">
        <div className="w-1/4 md:w-1/6">
          <Link to="/">
            <img className="logo" src={logo} width="60px" alt="Ozay Logo" />
          </Link>
        </div>

        <div className="w-3/4 md:w-5/6 lg:flex lg:flex-row justify-end md:flex md:flex-col">
          {/* Mobil navigasyon butonu */}
          <div
            className="md:hidden cursor-pointer text-gray-800 hover:text-blue-500 flex justify-end "
            onClick={toggleMobileNav}
          >
            {isMobileNavOpen ? (
              <FaTimes size="1.5em" />
            ) : (
              <FaBars size="1.5em" />
            )}
          </div>

          {/* Normal menü */}
          <nav
            className={`${
              isMobileNavOpen
                ? "flex flex-col items-end mt-4"
                : "hidden md:flex"
            } md:flex md:items-center justify-end`}
          >
            <ul className="md:flex gap-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/buttons"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  Buttons
                </Link>
              </li>
              <li>
                <Link
                  to="/alerts"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  Alerts
                </Link>
              </li>
              <li>
                <Link
                  to="/badges"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  Badges
                </Link>
              </li>
              <li>
                <Link
                  to="/cards"
                  className="text-gray-800 hover:text-blue-500 font-bold"
                >
                  Cards
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ozayo/React-Components-Library"
                  target="_blank"
                  className="text-gray-800 hover:text-blue-500 flex items-center"
                >
                  <FaGithub size="1.5em" className="mr-1" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
