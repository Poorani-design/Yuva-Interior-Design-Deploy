import React from "react";
import LeadForm from "../Modal/Modal";

const Services = () => {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div className="w-full pt-12 bg-neutral-900" id="service">
      {/* HERO */}
      <section className="bg-neutral-900 text-white text-center pt-10 px-4">
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-amber-500">
          Our Interior Design Services
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Transform your space with premium interior solutions tailored to your
          needs
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-neutral-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Modular Kitchen",
            "Wardrobe Design",
            "Living Room Interiors",
            "Bedroom Design",
            "Office Interiors",
            "Full Home Interiors",
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 border border-neutral-700 rounded-xl
              hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10
              transition duration-300"
            >
              <h3 className="text-lg font-semibold text-amber-400 mb-2">
                {service}
              </h3>
              <p className="text-gray-400 text-sm">
                High-quality customized design solutions for your space.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16 px-4">
        <h2 className="text-[24px] sm:text-[32px] font-semibold">
          Ready to Design Your Dream Home?
        </h2>

        <button
          onClick={() => setShowForm(true)}
          className="mt-6 px-8 py-3 bg-black text-white hover:text-black rounded-md hover:bg-amber-500 transition"
        >
          Get Free Quote
        </button>
      </section>
      {showForm && <LeadForm setShowForm={setShowForm} />}
    </div>
  );
};

export default Services;
