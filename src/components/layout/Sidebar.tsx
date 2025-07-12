"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Play, User, Settings, X, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";

const Sidebar = () => {
  const { user } = useAuth();
  const { theme } = useTheme();
  console.log('Sidebar theme:', theme);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [navItems, setNavItems] = useState([
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/my-courses", icon: BookOpen, label: "My Courses" },
    { href: "/my-internships", icon: Play, label: "Internship Programs" },
    // { href: "/profile", icon: User, label: "Profile" },
    // { href: "/settings", icon: Settings, label: "Settings" },
  ]);

  useEffect(() => {
    if (user) {
      const dynamicNavItems = [
        { href: "/dashboard", icon: Home, label: "Dashboard" },
        { href: "/my-courses", icon: BookOpen, label: "My Courses" },
        { href: "/my-internships", icon: Play, label: "Internship Programs" },
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
    <>
      <button
        className="fixed top-4 left-4 z-[60] lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <aside
        className={`sidebar ${
          isOpen ? "open" : ""
        } fixed top-0 left-0 h-full shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-50 ${
          theme === 'dark' ? 'dark' : ''
        }`}
        id="sidebar"
      >
        <div className="logo">
          <div className="logo-icon">L</div>
          <span className="logo-text">LearnHub</span>
        </div>

        <nav className="flex flex-col justify-between h-full">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
              <Link
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                  <item.icon className="nav-icon" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
