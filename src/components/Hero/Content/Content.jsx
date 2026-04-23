import React from "react";
import LeadForm from "../../Modal/Modal";
import Yuva_Interior_Designer from "../../../assets/Images/HeroSection/Yuva_Interior_Designer_1.png";


const Content = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <section className="w-full flex flex-col  justify-center items-center sm:flex-row bg-black mt-10 md:mt-15">
      {/* 🔹 LEFT (BLACK THEME) */}
      <div className="flex items-center px-5 py-2 sm:px-10 lg:px-16">
        <div className="max-w-xl flex flex-col gap-6">
          {/* Tag */}
          {/* <span className="text-amber-500 text-sm tracking-[3px]  uppercase">
           <br/><br/> Premium Interior Design
          </span> */}

          {/* Heading */}
          <h1
            className="text-white mt-10 font-semibold leading-tight
            text-[32px]
            sm:text-[40px]
            md:text-[48px]
            lg:text-[56px]"
          >
            Transform Your <span className="text-amber-500">Dream Space</span>{" "}
            Into Reality
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed">
            We design elegant and modern interiors across Chennai, creating
            beautiful spaces that reflect your lifestyle.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-amber-500 text-black font-medium rounded-md
              hover:bg-amber-400 transition duration-300 shadow-lg shadow-amber-500/20"
            >
              Get Free Quote
            </button>

            <a href="/portfolio">
              <button
                className="px-6 py-3 border border-amber-500 text-amber-500 rounded-md
              hover:bg-amber-500 hover:text-black transition duration-300"
              >
                View Projects
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 RIGHT (IMAGE WITH SOFT OVERLAY) */}
      <div className=" ">
        <img
          src={Yuva_Interior_Designer}
          alt="Interior Design"
          className="w-full h-full object-fit p-1 sm:p-3 rounded-lg shadow-lg shadow-black/30"
        />

        {/* Soft overlay for premium look */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>
      {/* LEAD FORM */}
      {showForm && <LeadForm setShowForm={setShowForm} />}
    </section>
  );
};

export default Content;
