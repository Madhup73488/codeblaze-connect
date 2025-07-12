'use client';
import React, { useState } from 'react';
import { 
  Shield,
  Eye,
  EyeOff,
  Download,
  LogOut,
  LogIn,
  Moon,
  Sun
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const SettingsPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h2>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-gray-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Update Password
            </button>
          </div>
          <div className="mt-6">
            {user ? (
              <Button onClick={logout} variant="secondary" className="w-full">
                <LogOut className="mr-2" />
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="default" className="w-full">
                  <LogIn className="mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Notifications</h3>
          <div className="space-y-4">
            {[
              { id: 'email', label: 'Email Notifications', description: 'Receive course updates via email' },
              { id: 'push', label: 'Push Notifications', description: 'Get notified about new lessons' },
              { id: 'weekly', label: 'Weekly Progress Report', description: 'Weekly summary of your learning progress' },
              { id: 'marketing', label: 'Marketing Emails', description: 'Receive updates about new courses and features' }
            ].map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{setting.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{setting.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Privacy & Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Enable
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
              <div className="flex items-center gap-3">
                <Eye className="text-gray-600 dark:text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Profile Visibility</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Control who can see your profile</p>
                </div>
              </div>
              <select className="px-3 py-1 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg text-sm">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
              <div className="flex items-center gap-3">
                <Download className="text-gray-600 dark:text-gray-400" size={20} />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Data Export</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Download your learning data</p>
                </div>
              </div>
              <button className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm text-gray-700 dark:text-gray-300">
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Appearance</h3>
          <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Toggle between light and dark mode</p>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Learning Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Video Quality</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Auto</option>
                <option>1080p</option>
                <option>720p</option>
                <option>480p</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Playback Speed</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1x (Normal)</option>
                <option>1.25x</option>
                <option>1.5x</option>
                <option>2x</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Auto-play Next Lesson</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Automatically start the next lesson</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-slate-700 rounded-lg">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Closed Captions</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Show subtitles by default</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 dark:bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-200 dark:border-red-800/50 p-6">
          <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Danger Zone</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-red-200 dark:border-red-800/50 rounded-lg bg-red-50 dark:bg-red-900/30">
              <div>
                <p className="font-medium text-red-900 dark:text-red-200">Delete Account</p>
                <p className="text-sm text-red-700 dark:text-red-300">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
