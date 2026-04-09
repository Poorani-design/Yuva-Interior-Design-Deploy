import React from "react";
import YuvaAboutImage from '../../assets/Images/AboutSection/Yuva_About.png'

const AboutUs = () => {
  return (
    <section  id='about' className=" text-white px-4 sm:px-6 lg:px-8 py-16 bg-white">

      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold text-black">
            About Yuva Interior
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base">
            Crafting dream spaces with elegance and precision
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="w-full h-[300px] md:h-[400px] overflow-hidden shadow-lg rounded-xl">
            <img
              src={YuvaAboutImage}
              alt="Yuva Interior Designer"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold text-black">
              We Design Spaces That Inspire
            </h2>

            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
              At Yuva Interior, we specialize in transforming homes into
              beautiful, functional spaces that reflect your lifestyle.
              With years of experience in interior design across Tamil Nadu,
              we bring creativity, innovation, and attention to detail in every project.
            </p>

            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
              From modular kitchens to full home interiors, we deliver
              high-quality designs tailored to your budget and needs.
            </p>

            {/* CTA */}
            <a href="tel:+91 9087643369" className="mt-4 w-fit px-6 py-3 border border-black hover:text-black
              bg-black text-amber-400 hover:bg-transparent transition duration-300 rounded-md text-sm sm:text-base">
              Contact Us
            </a>
          </div>
        </div>
    <hr className="border-black"/>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-5">

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black">500+</h3>
            <p className="text-gray-800 text-sm">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black">15+</h3>
            <p className="text-gray-800 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black">100%</h3>
            <p className="text-gray-800 text-sm">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black">24/7</h3>
            <p className="text-gray-800 text-sm">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
