import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto flex justify-center items-center min-h-[60vh] px-4 py-16">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-4xl font-black mb-8 text-center text-gray-900 tracking-tighter">Login</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
              <input
                type="email"
                required
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Password</label>
              <input
                type="password"
                required
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#eb3e32] text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#d1352a] transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95"
            >
              Login
            </button>
          </div>
          <p className="mt-8 text-center text-sm font-bold text-gray-500">
            Don't have an account? <Link to="/signup" className="text-[#eb3e32] hover:underline underline-offset-4">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
