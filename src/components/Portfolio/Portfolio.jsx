import React from "react";
import generateImages from "../../utils/generatePortfolio";
import ImageSlider from "../ImageSlider/ImageSlider";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../../mockData/navbarData";


const Portfolio = () => {
  const categories = [
    {

      type: "lacave",
      folder: "1_Lacave",
      count: 5,
      title: "La Cave Interiors",
    },
    {
      type: "deligo",
      folder: "2_Deligo",
      count: 6,
      title: "Deligo Restaurant Design",
    },
    {
      type: "home_interior",
      folder: "3_Home_Interior",
      count: 10,
      title: "Home Interior Design",
    },
    {
      type: "school_college",
      folder: "4_School_College",
      count: 6,
      title: "School & College Interiors",
    },
    {
      type: "furniture",
      folder: "5_Furniture",
      count: 6,
      title: "Furniture Design",
    },
    {
      type: "office",
      folder: "5_Office",
      count: 5,
      title: "Office Interior Design",
    },
    {
      type: "restaurant",
      folder: "6_Restaurant",
      count: 8,
      title: "Restaurant Interior Design",
    },
    {
      type: "auditorium",
      folder: "7_Auditorium",
      count: 4,
      title: "Auditorium Design",
    },
    {
      type: "modular_kitchen",
      folder: "8_Modular_Kitchen",
      count: 12,
      title: "Modular Kitchen Design",
    },
    {
      type: "bedroom",
      folder: "9_Bedroom",
      count: 7,
      title: "Bedroom Interior Design",
    },
    {
      type: "space_savings",
      folder: "10_Space_Savings",
      count: 5,
      title: "Space Saving Design",
    },
    {
      type: "living",
      folder: "11_Living",
      count: 13,
      title: "Living Room Interior Design",
    },
    {
      type: "lightening",
      folder: "12_Lightening",
      count: 5,
      title: "Lighting Design",
    },
    {
      type: "shops",
      folder: "13_Shops",
      count: 6,
      title: "Shop Interior Design",
    },
    { type: "pooja", folder: "14_Pooja", count: 4, title: "Pooja Room Design" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
          {/* 🔹 LOGO */}
          <div className="yuva-logo group cursor-pointer flex flex-col items-start leading-tight">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-[4px] text-white relative mb-2">
              YUVA
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </h1>

            <span className="text-[15px] tracking-[5px] uppercase text-amber-500 mt-1">
              INTERIOR DESIGNER
            </span>
          </div>

          {/* 🔹 DESKTOP MENU */}

          <ul className="md:flex items-center gap-8">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                {/* 🔥 INTERNAL ROUTE */}
                {item.title == "Home" ? (
                  <Link
                    to={item.link}
                    className="text-lg hover:text-gray-500 text-amber-400 transition duration-300"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="text-center pt-16 px-4">
          <h2 className="text-2xl md:text-5xl font-bold my-4">
            Elegant Interior Designs
          </h2>
          <p className="text-white  mx-auto">
            Transforming spaces into beautiful, functional environments tailored
            to your lifestyle.
          </p>
        </section>

        {/* Sliders */}
        <div className="max-w-7xl mx-auto px-5">
          {categories.map((cat) => (
            <div key={cat.type}>
              <ImageSlider data={generateImages(cat)} title={cat.title} />
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="mt-20 py-16 bg-neutral-900 text-center px-5"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-6">
            Let's design your dream space. Contact us today.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+919087643369"
              className="bg-amber-500 px-6 py-3 rounded-xl text-black font-semibold hover:bg-amber-400 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919087643369"
              target="_blank"
              className="bg-green-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-green-400 transition"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* Floating Buttons */}
        <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
          <a
            href="tel:+919087643369"
            className="bg-amber-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            <Phone />
          </a>
          <a
            href="https://wa.me/919087643369"
            target="_blank"
            className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
          >
            <MessageCircle />
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
