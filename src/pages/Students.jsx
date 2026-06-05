import React from "react";
import { useSchool } from "../context/useSchool";
import { students } from "../data/mockData";
import StudentCard from "../components/StudentCard";
import { Plus, Filter } from "lucide-react";

const Students = () => {
  const { currentSchool } = useSchool();
  const schoolStudents = students.filter(s => s.schoolId === currentSchool.id);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Directory</h1>
          <p className="text-gray-500">Manage and view all students at {currentSchool.name}.</p>
        </div>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 font-medium">
            <Filter size={18} />
            Filter
          </button>
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-xl text-white font-bold shadow-lg shadow-opacity-20 transition-transform active:scale-95"
            style={{ backgroundColor: currentSchool.themeColor }}
          >
            <Plus size={18} />
            Add Student
          </button>
        </div>
      </div>

      {schoolStudents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              themeColor={currentSchool.themeColor}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-200 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <Plus size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-800">No students found</h3>
          <p className="text-gray-500">Try switching schools or adding a new student record.</p>
        </div>
      )}
    </div>
  );
};

export default Students;
