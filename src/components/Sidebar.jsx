import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, CalendarCheck, Settings } from "lucide-react";
import { useSchool } from "../context/useSchool";

const Sidebar = () => {
  const { currentSchool } = useSchool();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Students", path: "/students", icon: Users },
    { name: "Grades", path: "/grades", icon: GraduationCap },
    { name: "Attendance", path: "/attendance", icon: CalendarCheck },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3 border-b border-gray-100">
        <img src={currentSchool.logo} alt="Logo" className="w-10 h-10 rounded-lg shadow-sm" />
        <span className="font-bold text-gray-800 truncate" title={currentSchool.name}>
          {currentSchool.name}
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              backgroundColor: isActive ? `${currentSchool.themeColor}15` : 'transparent',
              color: isActive ? currentSchool.themeColor : '#4b5563',
            })}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium group"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Plan</p>
          <p className="text-sm font-semibold text-gray-700">School MVP Premium</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
