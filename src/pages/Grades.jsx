import React from "react";
import { useSchool } from "../context/useSchool";
import { students, grades } from "../data/mockData";
import { GraduationCap, TrendingUp, ChevronRight } from "lucide-react";

const Grades = () => {
  const { currentSchool } = useSchool();
  const schoolStudents = students.filter(s => s.schoolId === currentSchool.id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Grades Management</h1>
        <p className="text-gray-500">Track academic performance for students at {currentSchool.name}.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-bold">Student</th>
                <th className="px-6 py-4 font-bold">Subject</th>
                <th className="px-6 py-4 font-bold">Score</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {schoolStudents.map(student => {
                const studentGrades = grades.filter(g => g.studentId === student.id);

                if (studentGrades.length === 0) {
                  return (
                    <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={student.photo} alt="" className="w-8 h-8 rounded-full bg-gray-100" />
                          <span className="font-medium text-gray-800">{student.name}</span>
                        </div>
                      </td>
                      <td colSpan="4" className="px-6 py-4 text-sm text-gray-400 italic">No grades recorded yet.</td>
                    </tr>
                  );
                }

                return studentGrades.map((grade, idx) => (
                  <tr key={`${student.id}-${idx}`} className="hover:bg-gray-50 transition-colors group">
                    {idx === 0 && (
                      <td className="px-6 py-4" rowSpan={studentGrades.length}>
                        <div className="flex items-center gap-3">
                          <img src={student.photo} alt="" className="w-10 h-10 rounded-full bg-gray-100" />
                          <div>
                            <p className="font-bold text-gray-800">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.grade}</p>
                          </div>
                        </div>
                      </td>
                    )}
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{grade.subject}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-800">{grade.score}%</span>
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${grade.score}%`,
                              backgroundColor: grade.score >= 90 ? '#10b981' : grade.score >= 75 ? '#3b82f6' : '#f59e0b'
                            }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                        grade.score >= 50 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                      }`}>
                        {grade.score >= 50 ? 'PASSED' : 'FAILED'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-white hover:shadow-md rounded-lg transition-all text-gray-400 hover:text-gray-600">
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grades;
