"use client";
import React, { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  CheckCircle,
  Circle,
  Book,
  Clock,
  User,
  Maximize,
  Minimize,
  Home,
} from "lucide-react";
import Link from "next/link";
import { Course, Lesson } from "@/lib/course-loader";
import { useFocusMode } from "@/contexts/FocusModeContext";

interface CourseLayoutProps {
  children: React.ReactNode;
  course: Course;
  lesson: Lesson;
}

const CourseLayout = ({ children, course, lesson }: CourseLayoutProps) => {
  const { isFocusMode, toggleFocusMode, setIsFocusMode } = useFocusMode();

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFocusMode(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [setIsFocusMode]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Course Outline Sidebar */}
      {!isFocusMode && (
        <div className="w-72 bg-white dark:bg-slate-800 shadow-lg border-r border-gray-200 dark:border-slate-700 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Course Outline
              </h2>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                {course.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Progress: 65% Complete</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-3 space-y-2 overflow-y-auto flex-1">
            {course.modules.map((module) => (
              <div key={module.id} className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {module.title}
                </h4>
                {module.lessons.map((l) => (
                  <Link
                    href={`/courses/${course.id}/${module.id}/${l.id}`}
                    key={l.id}
                  >
                    <div
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        l.id === lesson.id
                          ? "bg-indigo-50 dark:bg-indigo-900/50 border-l-4 border-indigo-500"
                          : "hover:bg-gray-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {l.id === lesson.id ? (
                          <Play className="w-5 h-5 text-indigo-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 dark:text-slate-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            l.id === lesson.id
                              ? "text-indigo-700 dark:text-indigo-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {l.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{l.duration} min</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen">
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {lesson.title}
              </h1>
              <div className="flex items-center space-x-4 mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                  {lesson.type} Lesson
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{lesson.duration} min</span>
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lesson.difficulty}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/dashboard" className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                <Home className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
              {/* Focus Mode Toggle */}
              <button
                onClick={toggleFocusMode}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isFocusMode
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "bg-gray-600 text-white hover:bg-gray-700"
                }`}
                title={isFocusMode ? "Exit Focus Mode" : "Enter Focus Mode"}
              >
                {isFocusMode ? (
                  <Minimize className="w-4 h-4" />
                ) : (
                  <Maximize className="w-4 h-4" />
                )}
                <span>Focus Mode</span>
              </button>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default CourseLayout;
