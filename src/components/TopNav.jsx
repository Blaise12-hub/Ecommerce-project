import React from "react";
import { useSchool } from "../context/useSchool";
import { Bell, Search, User } from "lucide-react";

const TopNav = () => {
  const { currentSchool, schools, switchSchool } = useSchool();

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg w-96">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search students, classes, or records..."
          className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-600"
        />
      </div>

      <div className="flex items-center gap-6">
        <select
          value={currentSchool.id}
          onChange={(e) => switchSchool(e.target.value)}
          className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2 outline-none focus:ring-2 focus:ring-opacity-50"
          style={{ '--tw-ring-color': currentSchool.themeColor }}
        >
          {schools.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
          <button className="text-gray-500 hover:text-gray-700 relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Admin User</p>
              <p className="text-xs text-gray-500">School Administrator</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
              <User size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
