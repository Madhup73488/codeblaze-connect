"use client";
import React, { useState } from "react";
import { Module } from "@/lib/course-loader";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  Clock,
  Play,
  CheckCircle,
  Lock,
} from "lucide-react";

interface ModuleListProps {
  courseId: string;
  modules: Module[];
}

const ModuleList = ({ courseId, modules }: ModuleListProps) => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set()
  );

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  return (
    <div className="space-y-2">
      {modules.map((module, moduleIndex) => {
        const isExpanded = expandedModules.has(module.id);
        const completedCount = 0; // You'd get this from your progress tracking
        const progressPercentage =
          (completedCount / module.lessons.length) * 100;

        return (
          <div
            key={module.id}
            className="border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 overflow-hidden"
          >
            {/* Module Header - Clickable */}
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 text-left">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {moduleIndex + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {module.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {module.lessons.length}
                  </span>
                  <span>
                    {completedCount}/{module.lessons.length}
                  </span>
                </div>

                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Progress Bar */}
            {progressPercentage > 0 && (
              <div className="px-4 pb-2">
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1">
                  <div
                    className="bg-green-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}

            {/* Lessons List - Collapsible */}
            {isExpanded && (
              <div className="border-t border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                <div className="py-2">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = false; // You'd get this from your progress tracking
                    const isLocked = false; // You'd determine this based on your course logic

                    return (
                      <Link
                        key={lesson.id}
                        href={`/courses/${courseId}/${module.id}/${lesson.id}`}
                        className={`flex items-center justify-between px-4 py-3 hover:bg-white dark:hover:bg-slate-700 transition-colors ${
                          isLocked ? "cursor-not-allowed opacity-60" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div
                            className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                              isCompleted
                                ? "bg-green-500 text-white"
                                : isLocked
                                ? "bg-gray-300 dark:bg-slate-600 text-gray-500 dark:text-gray-400"
                                : "bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : isLocked ? (
                              <Lock className="w-3 h-3" />
                            ) : (
                              lessonIndex + 1
                            )}
                          </div>

                          <div className="flex-1">
                            <h4
                              className={`text-sm font-medium ${
                                isCompleted
                                  ? "text-green-700 dark:text-green-400"
                                  : isLocked
                                  ? "text-gray-500 dark:text-gray-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {lesson.title}
                            </h4>
                            {lesson.description && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {lesson.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {lesson.duration && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {lesson.duration}
                            </span>
                          )}

                          {!isLocked && !isCompleted && (
                            <Play className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ModuleList;
