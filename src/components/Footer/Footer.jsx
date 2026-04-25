import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LegalModal from "../Legal/LegalModal";
import { Link } from "react-router-dom";

const Footer = () => {
  const [open, setOpen] = useState(null);
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* 🔹 BRAND */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">YUVA</h2>
          <p className="text-amber-500 text-xs tracking-[4px] uppercase mt-1">
            Interior Designer
          </p>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Transforming spaces into elegant, functional designs across
            TamilNadu and Karnataka.
          </p>
        </div>

        {/* 🔹 QUICK LINKS */}
        <div>
          <h3 className="text-amber-500 font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:text-amber-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-amber-500">
                Services
              </a>
            </li>
            <li>
             <Link to="/portfolio"> <span className="hover:text-amber-500">
                Portfolio
              </span></Link>
            </li>
            <li>
              <a href="tel:+91 9087643369" className="hover:text-amber-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 🔹 SERVICES */}
        <div>
          <h3 className="text-amber-500 font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Modular Kitchen</li>
            <li>Wardrobe Design</li>
            <li>Living Room Interiors</li>
            <li>Bedroom Design</li>
            <li>Full Home Interiors</li>
          </ul>
        </div>

        {/* 🔹 CONTACT */}
        <div>
          <h3 className="text-amber-500 font-medium mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-3">Mobile : +91 9087643369</p>
          <p className="text-gray-400 text-sm mb-4">Main Branch : Hosur</p>
          <p className="text-gray-400 text-sm mb-4">Email : yuvainteriordesigner@gmail.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/yuva_interior_designer/"
              className="hover:text-amber-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="tel:+91 9087643369"
              className="hover:text-amber-500 transition"
            >
              <FaPhone />
            </a>
                <a
              href="https://www.linkedin.com/in/yuva-interior-designer/"
              className="hover:text-amber-500 transition"
            >
              <FaLinkedin />
            </a>
                <a
              href="https://www.youtube.com/@YuvaInteriorDesigner"
              className="hover:text-amber-500 transition"
            >
              <FaYoutube />
            </a>
            {/* <a href="#" className="hover:text-amber-500 transition">
              <FaFacebookF />
            </a> */}

            <a
              href="https://wa.me/919087643369"
              className="hover:text-amber-500 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:yuvainteriordesigner@gmail.com"
              className="hover:text-amber-500 transition"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Yuva Interiors. All rights reserved.</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <a
            href="#"
            onClick={() => setOpen("privacy")}
            className="hover:text-amber-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={() => setOpen("terms")}
            className="hover:text-amber-500"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <a
        href="https://wa.me/919087643369"
        className="fixed bottom-20 right-6 2xl bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+91 9087643369"
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaPhone />
      </a>
      {open && <LegalModal type={open} setOpen={setOpen} />}
    </footer>
  );
};

export default Footer;
