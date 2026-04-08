import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartProvider";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const activeStyle = "text-indigo-600 border-b-2 border-indigo-600 pb-1";
  const inactiveStyle = "hover:text-indigo-600 transition";

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white sticky top-0 z-50 border-b border-gray-100">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold italic">d</div>
        <div>
          <h1 className="font-bold text-2xl leading-none tracking-tighter">DROU</h1>
          <p className="text-[8px] text-gray-400 uppercase tracking-widest text-center">Mobile Store</p>
        </div>
      </Link>

      <ul className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-wider">
        <li className="cursor-pointer">
          <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
            Home
          </NavLink>
        </li>
        <li className="cursor-pointer flex items-center">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
            Electronics
          </NavLink>
          <span className="ml-1 text-[8px]">▼</span>
        </li>
        <li className="cursor-pointer hover:text-indigo-600 transition flex items-center">
          Blog
          <span className="ml-1 text-[8px]">▼</span>
        </li>
        <li className="cursor-pointer hover:text-indigo-600 transition flex items-center">
          Pages
          <span className="ml-1 text-[8px]">▼</span>
        </li>
        <li className="cursor-pointer hover:text-indigo-600 transition">Contact</li>
      </ul>

      <div className="flex items-center space-x-6 text-xl">
        <span className="cursor-pointer hover:text-indigo-600 transition">🔍</span>
        <span className="cursor-pointer hover:text-indigo-600 transition">❤️</span>
        <Link to="/cart" className="relative cursor-pointer hover:text-indigo-600 transition">
           <span>🛒</span>
           <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
             {cartCount}
           </span>
        </Link>
      </div>
    </nav>
  );
}
