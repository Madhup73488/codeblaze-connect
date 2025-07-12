"use client";
import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const NavigationBar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the mobile menu
  const pathname = usePathname(); // Get current pathname

  // Check if it's a lesson page
  const isLessonPage =
    pathname.startsWith("/courses/") &&
    pathname.includes("/module-") &&
    pathname.includes("/lesson-");

  if (isLessonPage) {
    return null; // Do not render NavigationBar on lesson pages
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => { // Added MouseEvent type
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node) && // Added type assertion
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Ensure overflow is reset on unmount
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "My Courses", href: "/my-courses" },
    { name: "My Internships", href: "/my-internships" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm lg:hidden">
      {" "}
      {/* Hidden on large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Title */}
          <div className="flex items-center space-x-3">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 group"
            >
              <img
                src="/logo.png"
                alt="Codeblaze Connect Logo"
                className="w-9 h-9 transition-transform group-hover:scale-105"
              />
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Codeblaze{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Connect
                </span>
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            {" "}
            {/* Removed md:hidden as this is now mobile only */}
            <div className="w-9 h-9 bg-blue-500 dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold text-lg mr-4">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="h-7 w-7 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu (Side Drawer) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-[60]
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 bg-gray-800">
          <div className="self-end mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              logout();
              setIsMenuOpen(false);
            }}
            className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors w-full py-2"
          >
            Logout
          </button>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default NavigationBar;
