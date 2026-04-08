import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm bg-gray-100">
        <span>+92 123 4567 890</span>
        <span>Tell a friend about Drou & get 20% off</span>
        <div className="space-x-4">
          <span>USD</span>
          <span>Login / Sign Up</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-full"></div>
          <h1 className="font-bold text-lg">DROU</h1>
        </div>

        <ul className="flex space-x-6 font-medium">
          <li className="text-indigo-600 cursor-pointer">Home</li>
          <li className="cursor-pointer">Electronics</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <div className="flex space-x-4 text-xl">
          <span>🔍</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-50">
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="text-indigo-600 font-semibold mb-2">
            SALE UP TO 30% OFF
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Apple Watch Series
          </h2>
          <p className="text-gray-600 mb-6">
            Featured packed at a better value than over powerful sensors
            to monitor your fitness
          </p>

          <Link to="/shop">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition cursor-pointer">
              Shop Now →
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-alum-midnight-s7?wid=680&hei=528&fmt=png-alpha&.v=1632171066000"
            alt="Apple Watch"
            className="w-[400px]"
          />
          {/* <img src=\"/watch.png\" alt=\"Apple Watch\" /> */}
        </div>
      </section>
    </div>
  );
}
