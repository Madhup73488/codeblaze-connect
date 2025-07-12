"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import apiClient from "@/lib/api";
import {
  Save,
  Camera,
  Phone,
  MapPin,
} from "lucide-react";
const ProfilePage = () => {
  const { user } = useAuth();
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const profileData = await apiClient.get('/connect/user/profile');
          if (profileData) {
            setProfileForm({
              name: profileData.name || user.name || "",
              email: profileData.email || user.email || "",
              phone: profileData.phone || "",
              location: profileData.location || "",
              bio: profileData.bio || "",
            });
          } else {
            setProfileForm({
              name: user.name || "",
              email: user.email || "",
              phone: "",
              location: "",
              bio: "",
            });
          }
        } catch (error) {
          console.error("Failed to fetch profile:", error);
          setProfileForm({
            name: user.name || "",
            email: user.email || "",
            phone: "",
            location: "",
            bio: "",
          });
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleSave = async () => {
    try {
      await apiClient.put('/connect/user/profile', profileForm);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Profile
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Certificates
              </h3>
              <div className="text-center text-gray-500 dark:text-gray-400">
                No certificates available.
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 mb-6">
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    JD
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-full p-2 hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                    <Camera
                      size={16}
                      className="text-gray-700 dark:text-gray-300"
                    />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {profileForm.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {profileForm.email}
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={14} />
                    {profileForm.phone}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
