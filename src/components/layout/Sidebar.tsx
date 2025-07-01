"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Play, User, Settings, X, Menu } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/my-courses", icon: BookOpen, label: "My Courses" },
    { href: "/my-internships", icon: Play, label: "Internship Programs" },
    // { href: "/profile", icon: User, label: "Profile" },
    // { href: "/settings", icon: Settings, label: "Settings" },
  ];

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
        } fixed top-0 left-0 h-full bg-white dark:bg-slate-800 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-50`}
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
