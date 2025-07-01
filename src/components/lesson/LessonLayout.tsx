"use client";

import React from "react";
import { ProgressTracker } from "@/components/progress/ProgressTracker";
import { BookOpen, Clock, Award } from "lucide-react";

interface LessonLayoutProps {
  children: React.ReactNode;
  courseId: string;
  moduleId: string;
  lessonId: string;
  title: string;
  description?: string;
  estimatedTime?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
}

export const LessonLayout = ({
  children,
  courseId,
  moduleId,
  lessonId,
  title,
  description,
  estimatedTime,
  difficulty,
}: LessonLayoutProps) => {
  const getDifficultyColor = (level?: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800/50";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800/50";
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800/50";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/50 dark:text-gray-300 dark:border-gray-800/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header Section */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-slate-800/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ProgressTracker
            courseId={courseId}
            moduleId={moduleId}
            lessonId={lessonId}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-gray-500 leading-tight">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-400 mt-3 max-w-3xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Lesson Metadata */}
          {(estimatedTime || difficulty) && (
            <div className="flex flex-wrap gap-4 mt-6">
              {estimatedTime && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-slate-700/50 shadow-sm">
                  <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {estimatedTime}
                  </span>
                </div>
              )}
              {difficulty && (
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm ${getDifficultyColor(
                    difficulty
                  )}`}
                >
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium capitalize">
                    {difficulty}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl"></div>

          {/* Content Wrapper */}
          <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden">
            {/* Content Header Gradient */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

            {/* Content Body */}
            <div className="p-8 lg:p-12">
              <div>{children}</div>
            </div>
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-slate-700/50 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
            </div>
            <span>Continue learning at your own pace</span>
          </div>
        </div>
      </div>
    </div>
  );
};
