import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuth";
import { Search, Heart, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const activeStyle = "text-[#eb3e32]";
  const inactiveStyle = "hover:text-[#eb3e32] transition duration-300";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const electronicsDropdown = (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-b-3xl p-10 grid grid-cols-3 gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-50">
      <div className="space-y-6">
        <h4 className="font-black text-gray-900 text-sm tracking-wider uppercase border-b border-gray-100 pb-2">Smart Phone</h4>
        <ul className="space-y-3 text-gray-500 font-medium text-xs normal-case tracking-normal">
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Direct TV</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">LCD Screen</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">LED Screen</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Smart Watch</li>
          <li className="text-[#eb3e32] cursor-pointer transition">Airpods Pro</li>
          <li className="text-[#eb3e32] cursor-pointer transition">Computer</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Headsets</li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-black text-gray-900 text-sm tracking-wider uppercase border-b border-gray-100 pb-2">Headphones</h4>
        <ul className="space-y-3 text-gray-500 font-medium text-xs normal-case tracking-normal">
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Android</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Airpods</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">iPhone</li>
          <li className="text-[#eb3e32] cursor-pointer transition">Windows Phones</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Apple Phones</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Logitech</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Nokia Phones</li>
        </ul>
      </div>
      <div className="space-y-6">
        <h4 className="font-black text-gray-900 text-sm tracking-wider uppercase border-b border-gray-100 pb-2">Apple Macbook</h4>
        <ul className="space-y-3 text-gray-500 font-medium text-xs normal-case tracking-normal">
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Laptop</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Convertible</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Wired Earbuds</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Macbook Pro</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Earbuds</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Speaker</li>
          <li className="hover:text-[#eb3e32] cursor-pointer transition">Home Security</li>
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-10 py-6">
        <Link to="/" className="flex items-center space-x-3 shrink-0">
          <div className="w-12 h-12 bg-[#eb3e32] rounded-full flex items-center justify-center text-white font-bold italic text-2xl shadow-lg transform -rotate-12">d</div>
          <div>
            <h1 className="font-black text-3xl leading-none tracking-tighter text-gray-900 uppercase">DROU</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Mobile Store</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 font-black text-sm uppercase tracking-[0.1em] text-gray-900">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              Home
            </NavLink>
          </li>
          <li className="group relative flex items-center py-4">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${isActive ? activeStyle : inactiveStyle} flex items-center`
              }
            >
              Electronics <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </NavLink>
            {electronicsDropdown}
          </li>
          <li className="cursor-pointer hover:text-[#eb3e32] transition flex items-center py-4 group">
            Blog <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          </li>
          <li className="cursor-pointer hover:text-[#eb3e32] transition flex items-center py-4 group">
            Pages <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          </li>
          <li className="cursor-pointer hover:text-[#eb3e32] transition py-4">Contact</li>
        </ul>

        <div className="flex items-center space-x-8 shrink-0">
          <div className="hidden sm:flex items-center space-x-6 text-gray-900">
            <button className="hover:text-[#eb3e32] transition duration-300">
              <Search className="w-6 h-6" />
            </button>
            <button className="hover:text-[#eb3e32] transition duration-300">
              <Heart className="w-6 h-6" />
            </button>
            <Link to="/cart" className="relative hover:text-[#eb3e32] transition duration-300">
               <ShoppingBag className="w-6 h-6" />
               <span className="absolute -top-2 -right-2 bg-[#eb3e32] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                 {cartCount}
               </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-8 space-y-8 shadow-2xl animate-fadeIn">
          <ul className="flex flex-col space-y-6 font-black uppercase text-lg tracking-widest text-gray-900">
            <li><Link to="/" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Electronics</Link></li>
            <li><Link to="/cart" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Cart ({cartCount})</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link></li>
                <li><button className="text-[#eb3e32] transition" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Login</Link></li>
                <li><Link to="/signup" className="hover:text-[#eb3e32] transition" onClick={() => setIsMobileMenuOpen(false)}>Signup</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
