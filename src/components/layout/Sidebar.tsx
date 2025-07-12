"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Play, User, Settings, LogOut } from "lucide-react"; // Added LogOut icon
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image"; // Import Image component
import logo from "@/../public/logo.png"; // Import logo image

const Sidebar = () => {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const pathname = usePathname();

  const [navItems, setNavItems] = useState([
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/my-courses", icon: BookOpen, label: "My Courses" },
    { href: "/my-internships", icon: Play, label: "Internship Programs" },
    { href: "/profile", icon: User, label: "Profile" },
  ]);

  useEffect(() => {
    if (user) {
      const dynamicNavItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/my-courses", icon: BookOpen, label: "My Courses" },
        { href: "/my-internships", icon: Play, label: "Internship Programs" },
        { href: "/profile", icon: User, label: "Profile" },
      ];
      setNavItems(dynamicNavItems);
    }
  }, [user]);

  const isLessonPage =
    pathname.includes("/courses/") && pathname.split("/").length > 3;
  if (isLessonPage) {
    return null;
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 shadow-lg transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 hidden lg:flex flex-col`} // Always visible on large screens
      id="sidebar"
    >
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700 px-4">
        <Link href="/dashboard" className="flex items-center space-x-2 group">
          <Image
            src={logo}
            alt="Codeblaze Connect Logo"
            width={36}
            height={36}
            className="transition-transform group-hover:scale-105"
            unoptimized
          />
          <h1 className="text-l font-extrabold text-gray-900 dark:text-white tracking-tight">
            Codeblaze{" "}
            <span className="text-orange-600 dark:text-orange-400">
              Connect
            </span>
          </h1>
        </Link>
      </div>

      <nav className="flex flex-col flex-1 py-4">
        <ul className="flex-1 space-y-1 px-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-blue-500 dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold text-lg shadow-md">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <span className="text-gray-900 dark:text-white font-medium">
              {user?.name || "User"}
            </span>
          </div>
          <button
            onClick={logout}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
