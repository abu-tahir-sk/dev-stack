import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="h-16 flex items-center justify-between">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-md
              text-gray-700
              hover:text-pink-500
              hover:bg-gray-50
              transition
            "
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
          >
            {menuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>

          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center md:flex-1"
          >
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="w-[110px] h-auto object-contain"
            />
          </a>

         
          <div className="hidden md:flex items-center gap-7 text-sm">

            <a
             
              className="
                text-pink-500
                font-semibold
                hover:text-pink-600
                transition 
              "
            >
              Home
            </a>

            <a
            
              className="
                text-gray-600
                hover:text-pink-500
                transition
              "
            >
              Technologies
            </a>

            <a
             
              className="
                text-gray-600
                hover:text-pink-500
                transition
              "
            >
              Projects
            </a>

            <a
            
              className="
                text-gray-600
                hover:text-pink-500
                transition
              "
            >
              About
            </a>

            <a
              
              className="
                text-gray-600
                hover:text-pink-500
                transition
              "
            >
              Contact
            </a>

          </div>

          
          <div
            className="
              flex
              items-center
              gap-2
              md:flex-1
              md:justify-end
            "
          >
            <button
              className="
                text-xs
                md:text-sm
                text-gray-600
                px-2
                hover:text-pink-500
                transition
              "
            >
              Sign In
            </button>

            <button
              className="
                brand-gradient
                text-white
                text-xs
                md:text-sm
                px-4
                py-2
                rounded-full
                transition-all
                hover:brightness-110
                hover:shadow-md
                active:scale-95
              "
            >
              Sign Up
            </button>
          </div>
        </div>

     
        {menuOpen && (
          <div
            className="
              md:hidden
              border-t
              border-gray-100
              py-4
            "
          >
            <div className="flex flex-col gap-4 text-sm">

              <a
                href="#home"
                onClick={closeMenu}
                className="
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={closeMenu}
                className="
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  text-gray-600
                  hover:text-pink-500
                  transition
                "
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;