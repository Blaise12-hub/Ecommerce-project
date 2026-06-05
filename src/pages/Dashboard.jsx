import React from "react";
import { useSchool } from "../context/useSchool";
import { students } from "../data/mockData";
import { Users, GraduationCap, CalendarCheck, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { currentSchool } = useSchool();
  const schoolStudents = students.filter(s => s.schoolId === currentSchool.id);

  const stats = [
    { name: "Total Students", value: schoolStudents.length, icon: Users, color: "#3b82f6" },
    { name: "Active Classes", value: "12", icon: GraduationCap, color: "#10b981" },
    { name: "Daily Attendance", value: "94%", icon: CalendarCheck, color: "#f59e0b" },
    { name: "Avg Performance", value: "88%", icon: TrendingUp, color: "#8b5cf6" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
        <p className="text-gray-500">Here's what's happening at {currentSchool.name} today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div
              className="p-3 rounded-xl text-white"
              style={{ backgroundColor: stat.color }}
            >
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">New student record created</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Upcoming Tasks</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="bg-white p-2 rounded-lg text-gray-400">
                <CalendarCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Final Semester Grading</p>
                <p className="text-xs text-gray-500">Due in 3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
