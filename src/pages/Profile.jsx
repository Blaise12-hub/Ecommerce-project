import React, { useState } from "react";
import { useAuth } from "../context/useAuth";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (!user) {
    return (
      <div className="max-w-[1400px] mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-gray-900">Please log in to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-16">
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-6 mb-12">
            <div className="w-20 h-20 bg-[#eb3e32] rounded-full flex items-center justify-center text-white text-3xl font-black italic shadow-lg">
              {user.name.charAt(0).toLowerCase()}
            </div>
            <div>
              <h2 className="text-4xl font-black text-gray-900 leading-tight">My Profile</h2>
              <p className="text-[#eb3e32] font-bold">Personal Settings</p>
            </div>
          </div>

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl mb-8 flex items-center animate-fadeIn">
              <span className="mr-2">✓</span> {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2 opacity-70">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none bg-white cursor-not-allowed"
                value={formData.email}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Shipping Address</label>
              <textarea
                rows="4"
                className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] bg-white transition"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#eb3e32] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#d1352a] transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
