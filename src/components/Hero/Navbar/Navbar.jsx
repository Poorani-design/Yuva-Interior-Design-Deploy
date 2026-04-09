import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavbarMenu } from "../../../mockData/navbarData";
import Responsive from "./Responsive";
import LeadForm from "../../Modal/Modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-white/30 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          {/* 🔹 LOGO */}
          <div className="yuva-logo group cursor-pointer flex flex-col items-start leading-tight">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-[4px] text-white relative mb-2">
              YUVA
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </h1>

            <span className="text-[10px] tracking-[5px] uppercase text-amber-500 mt-1">
              INTERIOR DESIGNER
            </span>
          </div>

          {/* 🔹 DESKTOP MENU */}

          <ul className="hidden md:flex items-center gap-8">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                {/* 🔥 INTERNAL ROUTE */}
                {item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    className="text-sm text-gray-300 hover:text-amber-500 transition duration-300"
                  >
                    {item.title}
                  </Link>
                ) : (
                  /* 🔥 SCROLL LINK */
                  <a
                    href={item.link}
                    className="text-sm text-gray-300 hover:text-amber-500 transition duration-300"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* 🔹 CTA BUTTON */}
          <div className="">
            <button
              onClick={() => setShowForm(true)}
              className="hidden md:block px-6 py-3 bg-amber-500 text-black font-medium rounded-md
              hover:bg-amber-400 transition duration-300 shadow-lg shadow-amber-500/20"
            >
              Get Free Quote
            </button>
          </div>

          {/* 🔹 MOBILE MENU ICON */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <CiMenuBurger className="text-2xl" />
          </div>
        </div>
      </nav>

      {/* 🔹 MOBILE MENU */}
      <Responsive open={open} setOpen={setOpen} />
      {/* LEAD FORM */}
      {showForm && <LeadForm setShowForm={setShowForm} />}
    </>
  );
};

export default Navbar;
