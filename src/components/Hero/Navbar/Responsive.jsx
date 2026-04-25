import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { NavbarMenu } from "../../../mockData/navbarData";
import { Link } from "react-router-dom";

const Responsive = ({ open, setOpen }) => {
  // 🔒 Disable background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)} // 👈 click outside closes
        >
          {/* 🔹 MENU PANEL */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // 👈 prevent close inside
            className="mx-4 mt-24 rounded-2xl bg-black/90 border border-white/10 shadow-xl"
          >
            <ul className="flex flex-col items-center gap-8 py-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className="text-white text-lg tracking-wide
                    hover:text-amber-500 transition duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
             
                  
              ))}
           
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;
