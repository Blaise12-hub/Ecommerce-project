export const schools = [
  {
    id: "school-1",
    name: "Greenwood High School",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GH",
    themeColor: "#10b981", // Emerald 500
    textColor: "#ffffff",
  },
  {
    id: "school-2",
    name: "Oakridge Academy",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=OA",
    themeColor: "#3b82f6", // Blue 500
    textColor: "#ffffff",
  },
];

export const students = [
  {
    id: "std-001",
    schoolId: "school-1",
    name: "Alice Johnson",
    grade: "10th Grade",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    email: "alice@example.com",
  },
  {
    id: "std-002",
    schoolId: "school-1",
    name: "Bob Smith",
    grade: "10th Grade",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    email: "bob@example.com",
  },
  {
    id: "std-003",
    schoolId: "school-2",
    name: "Charlie Brown",
    grade: "11th Grade",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    email: "charlie@example.com",
  },
];

export const grades = [
  { studentId: "std-001", subject: "Mathematics", score: 92 },
  { studentId: "std-001", subject: "English", score: 88 },
  { studentId: "std-002", subject: "Mathematics", score: 75 },
  { studentId: "std-002", subject: "English", score: 82 },
];

export const attendance = [
  { studentId: "std-001", date: "2023-10-01", status: "Present" },
  { studentId: "std-001", date: "2023-10-02", status: "Present" },
  { studentId: "std-002", date: "2023-10-01", status: "Absent" },
  { studentId: "std-002", date: "2023-10-02", status: "Present" },
];
