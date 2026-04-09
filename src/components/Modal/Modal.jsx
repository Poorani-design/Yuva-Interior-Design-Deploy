import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const LeadForm = ({ setShowForm }) => {
  //  🔒 Disable background scroll
  useEffect(() => {
    if (setShowForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setShowForm]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    project: "",
    requirement: "",
    budget: "",
  });

  const [error, setError] = useState("");

  // 🔐 SANITIZE (basic XSS protection)
  const sanitize = (value) => value.replace(/[<>]/g, "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: sanitize(e.target.value) });
  };

  // ✅ VALIDATION
  const validate = () => {
    if (!form.name || !form.phone || !form.email || !form.location) {
      return "Please fill in all required fields";
    }

    if (!/^[a-zA-Z ]{3,}$/.test(form.name)) {
      return "Enter valid name";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      return "Enter valid 10-digit phone";
    }

    return "";
  };

  // 📲 WHATSAPP
  const sendWhatsApp = () => {
    const err = validate();
    if (err) return setError(err);

    const message = `Hi, I'm interested in Interior Design.
      Name: ${form.name}
      Phone: ${form.phone}
      Email: ${form.email}
      Location: ${form.location}
      Project: ${form.project}
      Requirement: ${form.requirement}
      Budget: ${form.budget}`;

    // 🔥 CLOSE FORM FIRST
    setShowForm(false);

    // 🔥 THEN OPEN WHATSAPP
    setTimeout(() => {
      window.open(
        `https://wa.me/919087643369?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    }, 300);
  };

  // 📧 EMAIL (FIXED)

  const sendEmail = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    try {
      await emailjs.send(
        "service_58r6toj", // from EmailJS
        "template_7kpr35l", // from EmailJS
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          location: form.location,
          project: form.project,
          requirement: form.requirement,
          budget: form.budget,
        },
        "x3l3D3Ou96JLRYijn",
      );

      alert("✅ Email sent successfully!");

      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        project: "",
        requirement: "",
        budget: "",
      });
      setShowForm(false);
      setTimeout(() => {
        alert("We will contact you soon!");
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send email. Please try again later or whatsapp us");
    }
  };
  return (
    <div className="overflow-y-auto fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-50 px-4">
      {/* 🔹 CARD */}
      <div className="relative w-full  my-6  max-w-md bg-[#0f0f0f] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* 🔥 DECOR TOP GRADIENT */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600"></div>

        {/* 🔹 CONTENT */}
        <div className="p-6">
          {/* TITLE */}
          <h2 className="text-white text-2xl font-semibold text-center mb-1 tracking-wide">
            Get Free Quote
          </h2>
          <p className="text-gray-400 text-center text-sm mb-5">
            Free Consultation • Free Site Visit
          </p>

          {/* 🔹 FORM */}
          <div className="flex flex-col gap-4">
            {/* INPUT */}
            <div className="relative">
              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
              />
            </div>

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
            />
            <input
              name="location"
              placeholder="Location"
              onChange={handleChange}
              className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition"
            />

            {/* PROJECT */}
            <select
              name="project"
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white/20 rounded-lg text-gray-300 focus:border-amber-500 outline-none"
            >
              <option value="">Project Type (Optional)</option>
              <option>Home</option>
              <option>Office</option>
              <option>Shop</option>
              <option>Showroom</option>
            </select>

            {/* REQUIREMENT */}
            <select
              name="requirement"
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white/20 rounded-lg text-gray-300 focus:border-amber-500 outline-none"
            >
              <option value="">Requirement (Optional)</option>
              <option>Modular Kitchen</option>
              <option>Wardrobe</option>
              <option>TV Unit</option>
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Full Interior</option>
            </select>

            {/* BUDGET */}
            <select
              name="budget"
              onChange={handleChange}
              className="w-full p-3 bg-black border border-white/20 rounded-lg text-gray-300 focus:border-amber-500 outline-none"
            >
              <option value="">Budget (Optional)</option>
              <option>Below 2 Lakhs</option>
              <option>2L - 5L</option>
              <option>5L - 10L</option>
              <option>10L - 20L</option>
              <option>Above 20L</option>
            </select>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm mt-3 text-center">{error}</p>
          )}

          {/* 🔹 BUTTONS */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={sendWhatsApp}
              className="flex-1 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition shadow-md shadow-green-500/20"
            >
              WhatsApp
            </button>

            <button
              onClick={sendEmail}
              className="flex-1 py-3 rounded-lg bg-amber-300 hover:bg-amber-500 text-black font-semibold transition shadow-lg shadow-amber-500/20"
            >
              Submit
            </button>
          </div>
          <p className="text-amber-400 my-2 py-3 text-xs text-center">
            Limited slots available this week - Book your free consultation now!
          </p>
          <p className="text-xs text-gray-500 text-center mt-2">
            ⭐ Trusted by 100+ Happy Clients
          </p>

          {/* CLOSE */}
          <button
            onClick={() => setShowForm(false)}
            className="w-full text-gray-500 hover:text-white text-sm mt-4 transition"
          >
            Close
          </button>
        </div>

        {/* 🔥 DECOR CORNER GLOW */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default LeadForm;
