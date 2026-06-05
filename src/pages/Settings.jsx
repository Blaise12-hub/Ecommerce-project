import React, { useState } from "react";
import { useSchool } from "../context/useSchool";
import { Save, Palette, Globe, Shield } from "lucide-react";

const Settings = () => {
  const { currentSchool, updateSchoolConfig } = useSchool();
  const [formData, setFormData] = useState({
    name: currentSchool.name,
    themeColor: currentSchool.themeColor,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateSchoolConfig(formData);
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">School Settings</h1>
        <p className="text-gray-500">Customize your school's workspace and appearance.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-sm">
              <Palette size={24} style={{ color: currentSchool.themeColor }} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Appearance</h2>
              <p className="text-sm text-gray-500">Personalize your brand identity.</p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 rounded-xl text-white font-bold transition-transform active:scale-95"
            style={{ backgroundColor: currentSchool.themeColor }}
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">School Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-opacity-20 transition-all"
                style={{ '--tw-ring-color': currentSchool.themeColor }}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Primary Theme Color</label>
              <div className="flex gap-4">
                <input
                  type="color"
                  name="themeColor"
                  value={formData.themeColor}
                  onChange={handleChange}
                  className="h-12 w-24 p-1 rounded-lg border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  name="themeColor"
                  value={formData.themeColor}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 outline-none font-mono text-sm uppercase"
                />
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl shadow-inner border-4 border-white"
              style={{ backgroundColor: formData.themeColor }}
            ></div>
            <div>
              <p className="text-sm font-bold text-gray-800">Color Preview</p>
              <p className="text-xs text-gray-500">This color will be used for buttons, active links, and accents.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4 opacity-50 cursor-not-allowed">
          <div className="p-3 bg-gray-50 rounded-2xl">
            <Globe size={24} className="text-gray-400" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Custom Domain</h3>
            <p className="text-xs text-gray-500">Upgrade to Premium to enable.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-center gap-4 opacity-50 cursor-not-allowed">
          <div className="p-3 bg-gray-50 rounded-2xl">
            <Shield size={24} className="text-gray-400" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Advanced Security</h3>
            <p className="text-xs text-gray-500">Configure SSO and 2FA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
