import { Phone, MessageCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Big 404 */}
      <h1 className="text-6xl md:text-8xl font-bold text-amber-500 mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-xl md:text-3xl font-semibold mb-3">Page Not Found</h2>

      <p className="text-gray-400 max-w-md mb-8">
        The page you're looking for doesn’t exist. Let’s help you design your
        dream space instead.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        {/* WhatsApp */}
        <a
          href="https://wa.me/919087643369"
          target="_blank"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition"
        >
          <MessageCircle size={18} />
          WhatsApp Now
        </a>

        {/* Call */}
        <a
          href="tel:+919087643369"
          className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black py-3 px-4 rounded-xl font-semibold transition"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>

      {/* Back Home */}
      <a
        href="/"
        className="mt-6 text-sm text-gray-400 hover:text-white underline"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
