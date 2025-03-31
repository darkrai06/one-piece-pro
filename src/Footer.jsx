import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";
import worldMap from "./assets/World Map.svg";

const Footer = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <footer className="bg-gradient-to-r from-[#1f2940] to-[#99c4f2] text-white">
      <div className="container mx-auto px-10 py-16 space-y-10">
        {/* Top Section: Brand, Newsletter, and Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand & Quick Links */}
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-3xl font-bold">One Piece PRO</h1>
            <ul className="text-gray-200 space-y-2">
              <li className="hover:text-white transition">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#">About</a>
              </li>
              <li className="hover:text-white transition">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe to Updates
            </h2>
            <p className="text-gray-200 mb-6">
              Get the latest discounts delivered to your inbox.
            </p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-black w-2/3 sm:w-1/2 focus:outline-none"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black px-6 py-2 rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6 text-center sm:text-left">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p
              className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer text-gray-200 hover:text-white transition"
              onClick={() => handleCopy("support@oppro.com")}
            >
              <FiMail /> support@oppro.com
            </p>
            <p
              className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer text-gray-200 hover:text-white transition"
              onClick={() => handleCopy("+880123456789")}
            >
              <FiPhone /> +880 123 456 789
            </p>
            <div className="w-full max-w-[250px] mx-auto sm:mx-0">
              <img
                className="rounded-md border border-gray-400 hover:border-yellow-400 transition"
                src={worldMap}
                alt="World Map"
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Social Media */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
          <p className="text-gray-200 mb-6">
            Stay connected with us on social media!
          </p>
          <ul className="flex justify-center gap-6 text-xl">
            <li className="flex flex-col items-center">
              <a
                href="https://www.facebook.com/mahin.otakulimited"
                className="hover:text-blue-700 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <span className="text-sm text-gray-200 mt-2">Facebook</span>
            </li>
            <li className="flex flex-col items-center">
              <a
                href="https://www.instagram.com/anime_guy_bd/"
                className="hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <span className="text-sm text-gray-200 mt-2">Instagram</span>
            </li>
            <li className="flex flex-col items-center">
              <a
                href="https://t.me/animeguybd"
                className="hover:text-blue-400 transition"
                aria-label="Telegram"
              >
                <BsTelegram />
              </a>
              <span className="text-sm text-gray-200 mt-2">Telegram</span>
            </li>
            <li className="flex flex-col items-center">
              <a
                href="https://www.youtube.com/@animeguybd954"
                className="hover:text-red-500 transition"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <span className="text-sm text-gray-200 mt-2">YouTube</span>
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-200">
            &copy; 2024 Discount PRO. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-200">
            Developed by{" "}
            <a
              href="https://www.facebook.com/mahin.otakulimited"
              className="font-semibold text-green-400 hover:text-green-500 transition"
            >
              M M AL MAHIN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
