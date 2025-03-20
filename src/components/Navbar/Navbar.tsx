import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import { ResponsiveMenu } from "../ResponsiveMenu/ResponsiveMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
  }, [windowWidth]);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <img src={logo} alt="Logo" width="120" />
          </div>

         
          <div className="hidden md:flex space-x-6 text-slate-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block py-1 px-3 font-semibold hover:text-indigo-700 ${
                  isActive
                    ? "text-gray-800 font-semibold border-gray-400"
                    : "text-gray-500"
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `inline-block py-1 px-3 font-semibold hover:text-indigo-700 ${
                  isActive
                    ? "text-gray-800 font-semibold border-gray-400"
                    : "text-gray-500"
                }`
              }
            >
              Productos
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `inline-block py-1 px-3 font-semibold hover:text-indigo-700 ${
                  isActive
                    ? "text-gray-800 font-semibold border-gray-400"
                    : "text-gray-500"
                }`
              }
            >
              Categorías
            </NavLink>
          </div>

        
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-indigo-950 hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:bg-indigo-950 hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            <button className="text-2xl hover:bg-indigo-950 hover:text-white rounded-full p-2 duration-200">
              <CiUser />
            </button>
          </div>

       
          <div className="md:hidden">
            <button className="text-4xl" onClick={() => setOpen(true)}>
              <MdMenu />
            </button>
          </div>
        </div>
      </nav>

    
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};
