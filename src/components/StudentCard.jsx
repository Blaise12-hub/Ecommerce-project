import React from "react";
import { Mail, GraduationCap, Hash } from "lucide-react";

const StudentCard = ({ student, themeColor }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="h-24" style={{ backgroundColor: themeColor }}></div>

      <div className="px-6 pb-8 -mt-12 text-center">
        <div className="inline-block p-1 bg-white rounded-full mb-4">
          <img
            src={student.photo}
            alt={student.name}
            className="w-24 h-24 rounded-full bg-gray-100 object-cover border-4 border-white"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-1">{student.name}</h3>
        <p className="text-sm font-medium text-gray-500 mb-6">{student.grade}</p>

        <div className="space-y-3 text-left bg-gray-50 p-4 rounded-2xl">
          <div className="flex items-center gap-3 text-gray-600">
            <Hash size={16} className="text-gray-400" />
            <span className="text-xs font-mono">{student.id}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={16} className="text-gray-400" />
            <span className="text-sm truncate">{student.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <GraduationCap size={16} className="text-gray-400" />
            <span className="text-sm">{student.grade} student</span>
          </div>
        </div>

        <button
          className="mt-6 w-full py-3 rounded-xl font-bold text-sm transition-colors"
          style={{ backgroundColor: `${themeColor}15`, color: themeColor }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
