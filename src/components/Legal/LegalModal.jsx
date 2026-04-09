import React from "react";

const LegalModal = ({ type, setOpen }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={() => setOpen(null)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#0f0f0f] text-white rounded-2xl border border-white/10 max-h-[90vh] overflow-y-auto p-6"
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          {type === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
        </h2>

        {/* CONTENT */}
        <div className="text-gray-300 text-sm leading-relaxed space-y-4">
          {type === "privacy" ? (
            <>
              <p>
                At Yuva Interior Designer, we value your privacy and are
                committed to protecting your personal information.
              </p>

              <h3 className="text-white font-medium">Information We Collect</h3>
              <p>
                We collect your name, phone number, email, location, and project
                details when you submit a form.
              </p>

              <h3 className="text-white font-medium">
                How We Use Your Information
              </h3>
              <ul className="list-disc pl-5">
                <li>
                  To contact you regarding your interior design requirements
                </li>
                <li>To provide quotations and consultation</li>
                <li>To improve our services</li>
              </ul>

              <h3 className="text-white font-medium">Data Protection</h3>
              <p>
                Your data is secured and will not be sold or shared with third
                parties.
              </p>

              <h3 className="text-white font-medium">Contact</h3>
              <p>Email: yuvainteriordesigner@gmail.com</p>
            </>
          ) : (
            <>
              <p>
                By using our website, you agree to the following terms and
                conditions.
              </p>

              <h3 className="text-white font-medium">Services</h3>
              <p>
                We provide interior design consultation, execution, and related
                services.
              </p>

              <h3 className="text-white font-medium">Pricing</h3>
              <p>
                All pricing is discussed and finalized after consultation. No
                hidden charges policy applies.
              </p>

              <h3 className="text-white font-medium">Project Timeline</h3>
              <p>
                Timelines may vary depending on project complexity and site
                conditions.
              </p>

              <h3 className="text-white font-medium">Liability</h3>
              <p>
                We are not responsible for delays caused by external factors
                beyond our control.
              </p>

              <h3 className="text-white font-medium">Contact</h3>
              <p>Email: yuvainteriordesigner@gmail.com</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
