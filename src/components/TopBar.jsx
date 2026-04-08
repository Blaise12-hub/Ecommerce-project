import React from "react";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-10 py-2 text-xs text-gray-500 border-b border-gray-100 bg-white">
      <div className="flex space-x-4">
        <span>+92 123 4567 890</span>
        <span className="border-l border-gray-200 pl-4">Store Location</span>
      </div>
      <span>Tell a friend about Drou & get 20% off</span>
      <div className="flex items-center space-x-6">
        <div className="flex items-center cursor-pointer">
          <span>USD</span>
          <span className="ml-1 text-[8px]">▼</span>
        </div>
        <span className="cursor-pointer">Log In / Sign Up</span>
      </div>
    </div>
  );
}
