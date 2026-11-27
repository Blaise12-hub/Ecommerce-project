import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
    navigate("/");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center min-h-[70vh] px-4 py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-4xl font-black mb-8 text-center text-gray-900 tracking-tighter">Join Us</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
              <input
                type="password"
                required
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Shipping Address</label>
              <textarea
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                rows="3"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#eb3e32] text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#d1352a] transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-8 text-center text-sm font-bold text-gray-500">
            Already have an account? <Link to="/login" className="text-[#eb3e32] hover:underline underline-offset-4">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
