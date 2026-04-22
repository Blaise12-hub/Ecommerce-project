import React from "react";
import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function TopBar() {
  const { user } = useAuth();

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-10 py-3 text-[11px] text-gray-500 font-bold uppercase tracking-tight">
        <div className="flex items-center space-x-6">
          <span className="hover:text-[#eb3e32] cursor-pointer transition">+92 123 4567 890</span>
          <div className="h-3 w-px bg-gray-200"></div>
          <span className="hover:text-[#eb3e32] cursor-pointer transition">Store Location</span>
        </div>

        <span className="hidden lg:inline normal-case tracking-normal font-medium">
          Tell a friend about Drou & get <strong className="text-[#eb3e32] font-black">20% off</strong>
        </span>

        <div className="flex items-center space-x-6">
          <div className="flex items-center cursor-pointer hover:text-[#eb3e32] transition group">
            <span>USD</span>
            <ChevronDown className="ml-1 w-3 h-3 group-hover:rotate-180 transition-transform" />
          </div>
          <div className="h-3 w-px bg-gray-200"></div>
          <div>
            {user ? (
               <Link to="/profile" className="hover:text-[#eb3e32] transition">My Account</Link>
            ) : (
               <Link to="/login" className="hover:text-[#eb3e32] transition">Log In / Sign Up</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
