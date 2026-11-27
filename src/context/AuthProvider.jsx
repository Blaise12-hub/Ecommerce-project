import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser = {
      name: "John Doe",
      email: email,
      address: "123 Main St, New York, NY",
    };
    setUser(mockUser);
    setLoading(false);
  };

  const signup = async (userData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser(userData);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
