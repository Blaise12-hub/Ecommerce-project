import React, { useState, useEffect } from "react";
import { schools } from "../data/mockData";
import { SchoolContext } from "./SchoolContextInstance";

export const SchoolProvider = ({ children }) => {
  const [currentSchool, setCurrentSchool] = useState(() => {
    const saved = localStorage.getItem("currentSchoolId");
    return schools.find((s) => s.id === saved) || schools[0];
  });

  useEffect(() => {
    localStorage.setItem("currentSchoolId", currentSchool.id);
    document.documentElement.style.setProperty('--primary-school', currentSchool.themeColor);
  }, [currentSchool]);

  const updateSchoolConfig = (config) => {
    setCurrentSchool((prev) => ({ ...prev, ...config }));
  };

  const switchSchool = (schoolId) => {
    const school = schools.find((s) => s.id === schoolId);
    if (school) setCurrentSchool(school);
  };

  return (
    <SchoolContext.Provider value={{ currentSchool, updateSchoolConfig, switchSchool, schools }}>
      {children}
    </SchoolContext.Provider>
  );
};
