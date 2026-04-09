import { TbToolsKitchen } from "react-icons/tb";
import { SiCssdesignawards } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";

const reasonData = [
  {
    id: 1,
    icon: <TbToolsKitchen />,
    title: "Modular Kitchen",
    description: "Modern, space-saving kitchen designs.",
  },
  {
    id: 2,
    icon: <SiCssdesignawards />,
    title: "Custom Designs",
    description: "Personalized interiors for your style.",
  },
  {
    id: 3,
    icon: <CiDeliveryTruck />,
    title: "On-Time Delivery",
    description: "Project delivered as promised.",
  },
  {
    id: 4,
    icon: <MdVerified />,
    title: "15 Years Warranty",
    description: "Long-lasting quality assurance.",
  },
  {
    id: 5,
    icon: <FaRupeeSign />,
    title: "No Hidden Cost",
    description: "Transparent pricing always.",
  },
  {
    id: 6,
    icon: <GiFactory />,
    title: "Direct Manufacturer",
    description: "Factory pricing, no middleman.",
  },
];

export default function ChooseUs() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* 🔹 HEADER */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Why Choose{" "}
            <span className="text-amber-500">Yuva Interior?</span>
          </h2>

          <p className="text-sm text-amber-500 tracking-[0.3em] uppercase">
            Stylish • Affordable • Trusted
          </p>
        </div>

        {/* 🔹 GRID CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

          {reasonData.map((item) => (
            <div
              key={item.id}
              className="bg-white text-black rounded-xl p-5 flex flex-col items-center text-center
              shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 group"
            >

              {/* ICON */}
              <div className="text-3xl mb-3 text-amber-500 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm font-semibold mb-1">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-xs text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
