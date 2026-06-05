import React from "react";
import { useSchool } from "../context/useSchool";
import { students, attendance } from "../data/mockData";
import { CalendarCheck, CheckCircle2, XCircle } from "lucide-react";

const Attendance = () => {
  const { currentSchool } = useSchool();
  const schoolStudents = students.filter(s => s.schoolId === currentSchool.id);

  // Get unique dates
  const dates = [...new Set(attendance.map(a => a.date))].sort().reverse();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Attendance Tracker</h1>
          <p className="text-gray-500">Daily attendance records for students at {currentSchool.name}.</p>
        </div>

        <button
          className="px-6 py-2 rounded-xl text-white font-bold shadow-lg shadow-opacity-20 transition-transform active:scale-95"
          style={{ backgroundColor: currentSchool.themeColor }}
        >
          Mark Attendance
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Student</th>
                {dates.map(date => (
                  <th key={date} className="px-6 py-4 font-bold text-center">{date}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schoolStudents.map(student => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={student.photo} alt="" className="w-8 h-8 rounded-full bg-gray-100" />
                      <span className="font-medium text-gray-800">{student.name}</span>
                    </div>
                  </td>
                  {dates.map(date => {
                    const record = attendance.find(a => a.studentId === student.id && a.date === date);
                    const isPresent = record?.status === "Present";
                    const isAbsent = record?.status === "Absent";

                    return (
                      <td key={date} className="px-6 py-4 text-center">
                        {isPresent ? (
                          <div className="flex justify-center">
                            <CheckCircle2 className="text-green-500" size={24} />
                          </div>
                        ) : isAbsent ? (
                          <div className="flex justify-center">
                            <XCircle className="text-red-500" size={24} />
                          </div>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
