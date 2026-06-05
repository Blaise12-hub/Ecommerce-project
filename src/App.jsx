import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SchoolProvider } from "./context/SchoolProvider";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

// Lazy load pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Students = lazy(() => import("./pages/Students"));
const Grades = lazy(() => import("./pages/Grades"));
const Attendance = lazy(() => import("./pages/Attendance"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <SchoolProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64">
          <TopNav />
          <main className="mt-16 p-8">
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </SchoolProvider>
  );
}

export default App;
