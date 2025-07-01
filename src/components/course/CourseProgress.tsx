"use client";
import React from "react";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle, BookOpen } from "lucide-react";

interface CourseProgressProps {
  courseId: string;
  showStats?: boolean;
  variant?: "default" | "compact" | "detailed";
  className?: string;
}

const CourseProgress = ({
  courseId,
  showStats = true,
  variant = "default",
  className = "",
}: CourseProgressProps) => {
  const { getCourseProgress } = useProgress();
  const { completedLessons, totalLessons } = getCourseProgress(courseId);
  const progressPercentage =
    totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  const isCompleted = completedLessons === totalLessons && totalLessons > 0;

  if (variant === "compact") {
    return (
      <div
        className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Progress: {completedLessons} of {totalLessons} lessons
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {Math.round(progressPercentage)}%
            </span>
            {isCompleted && <CheckCircle className="w-4 h-4 text-green-500" />}
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div
        className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-6 ${className}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Course Progress</h3>
          {isCompleted && (
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/50 px-2 py-1 rounded text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Completed</span>
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>
              {completedLessons} of {totalLessons} lessons completed
            </span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
            <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">
              {completedLessons}
            </div>
            <div className="text-xs text-blue-600 dark:text-blue-500">Completed</div>
          </div>
          <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              {totalLessons - completedLessons}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Remaining</div>
          </div>
          <div className="p-3 bg-green-50 dark:bg-green-900/50 rounded-lg">
            <div className="text-lg font-semibold text-green-700 dark:text-green-400">
              {totalLessons}
            </div>
            <div className="text-xs text-green-600 dark:text-green-500">Total</div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-4 ${className}`}
    >
      {showStats && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {completedLessons} of {totalLessons} lessons completed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(progressPercentage)}%
            </span>
            {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
          </div>
        </div>
      )}

      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default CourseProgress;
