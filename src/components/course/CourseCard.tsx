'use client';
import React from "react";
import {
  Clock,
  BookOpen,
  Play,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  course: {
    id: number | string;
    title: string;
    description: string;
    lessons?: number;
    hours?: number;
    price?: number;
    rating?: number;
    students?: number;
    difficulty?: string;
    instructor?: string;
    category?: string;
    tags?: string[];
    trending?: boolean;
    featured?: boolean;
  };
  progress?: {
    completedLessons: number;
    totalLessons: number;
  };
  showProgress?: boolean;
  variant?: "default" | "compact" | "featured" | "minimal";
  onEnroll?: (courseId: number | string) => void;
  onContinue?: (courseId: number | string) => void;
}

const CourseCard = ({
  course,
  progress = { completedLessons: 0, totalLessons: course.lessons || 12 },
  showProgress = false,
  variant = "default",
  onEnroll,
  onContinue,
}: CourseCardProps) => {
  const progressPercentage =
    progress.totalLessons > 0
      ? (progress.completedLessons / progress.totalLessons) * 100
      : 0;

  const isCompleted = progress.completedLessons === progress.totalLessons;
  const isStarted = progress.completedLessons > 0;

  // Get course icon based on category or title
  const getCourseIcon = () => {
    const category = course.category?.toLowerCase() || "";
    const title = course.title.toLowerCase();

    if (
      category === "web" ||
      title.includes("react") ||
      title.includes("vue") ||
      title.includes("css")
    )
      return "🌐";
    if (
      category === "programming" ||
      title.includes("python") ||
      title.includes("node") ||
      title.includes("algorithm")
    )
      return "💻";
    if (
      category === "design" ||
      title.includes("ui") ||
      title.includes("ux") ||
      title.includes("design")
    )
      return "🎨";
    if (title.includes("javascript") || title.includes("js")) return "⚡";
    if (title.includes("python")) return "🐍";
    if (title.includes("mobile") || title.includes("flutter")) return "📱";
    if (title.includes("devops") || title.includes("docker")) return "🚀";
    return "📚";
  };

  const getProgressColor = () => {
    if (isCompleted) return "bg-green-500";
    if (progressPercentage >= 75) return "bg-blue-500";
    if (progressPercentage >= 50) return "bg-yellow-500";
    if (progressPercentage >= 25) return "bg-orange-500";
    return "bg-red-400";
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800/50";
      case "intermediate":
        return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800/50";
      case "advanced":
        return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800/50";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600";
    }
  };

  const getStatusBadge = () => {
    if (isCompleted) {
      return (
        <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium dark:bg-green-900/50 dark:text-green-300">
          <CheckCircle className="w-3 h-3" />
          Completed
        </div>
      );
    }
    if (isStarted) {
      return (
        <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium dark:bg-blue-900/50 dark:text-blue-300">
          <Play className="w-3 h-3" />
          In Progress
        </div>
      );
    }
    return null;
  };

  const handleAction = () => {
    if (showProgress && isStarted) {
      onContinue?.(course.id);
    } else {
      onEnroll?.(course.id);
    }
  };

  // Minimal variant for better desktop experience
  if (variant === "minimal") {
    return (
      <div className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 overflow-hidden relative cursor-pointer">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-1">
          {course.trending && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Hot
            </span>
          )}
          {course.featured && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Award className="w-3 h-3" />
              Pro
            </span>
          )}
        </div>

        {/* Course Header */}
        <div className="relative h-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 flex items-center justify-center">
          <div className="text-3xl opacity-70 dark:opacity-50">{getCourseIcon()}</div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {course.title}
          </h3>

          {/* Quick Stats */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              <span>{course.lessons || 12}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{course.hours || 8}h</span>
            </div>
            {course.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {course.tags && (
            <div className="flex flex-wrap gap-1 mb-3">
              {course.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Progress Bar if enrolled */}
          {showProgress && isStarted && (
            <div className="mb-3">
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 mb-1">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor()}`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round(progressPercentage)}% complete
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              ₹{course.price?.toLocaleString() || "999"}
            </div>
            <button
              onClick={handleAction}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
            >
              {showProgress && isStarted ? "Continue" : "Enroll"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="group bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 p-4 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg flex items-center justify-center text-xl">
            {getCourseIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {course.description}
            </p>
            {showProgress && (
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 dark:bg-slate-700 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor()}`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="font-bold text-gray-900 dark:text-white">
              ₹{course.price?.toLocaleString() || "999"}
            </div>
            {course.rating && (
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span>{course.rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Featured Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <div className="text-3xl">{getCourseIcon()}</div>
              {getStatusBadge()}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-100 transition-colors">
              {course.title}
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>{course.lessons || progress.totalLessons} lessons</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.hours || 8} hours</span>
              </div>
            </div>
            {course.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{course.rating}</span>
              </div>
            )}
          </div>

          {showProgress && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {progress.completedLessons}/{progress.totalLessons} lessons
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${getProgressColor()} relative`}
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse rounded-full" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ₹{course.price?.toLocaleString() || "999"}
            </div>
            <button
              onClick={handleAction}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              {showProgress && isStarted ? "Continue" : "Enroll Now"}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
      {/* Thumbnail Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 p-6 text-center">
        <div className="text-4xl mb-2">{getCourseIcon()}</div>
        <div className="absolute top-3 right-3">{getStatusBadge()}</div>

        {/* Course badges */}
        <div className="absolute top-3 left-3 flex gap-1">
          {course.trending && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Trending
            </span>
          )}
          {course.featured && (
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Award className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Tags */}
        {course.tags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {course.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{course.lessons || 12} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.hours || 8}h</span>
          </div>
          {course.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
          )}
          {course.students && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{(course.students / 1000).toFixed(1)}k</span>
            </div>
          )}
        </div>

        {/* Instructor & Difficulty */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <div className="text-gray-600 dark:text-gray-400 truncate">
            {course.instructor && (
              <>
                by{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  {course.instructor}
                </span>
              </>
            )}
          </div>
          {course.difficulty && (
            <span
              className={`px-2 py-1 rounded-full font-medium border flex-shrink-0 ${getDifficultyColor(
                course.difficulty
              )}`}
            >
              {course.difficulty}
            </span>
          )}
        </div>

        {/* Progress Bar if enrolled */}
        {showProgress && isStarted && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                Progress
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {progress.completedLessons}/{progress.totalLessons} lessons
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {Math.round(progressPercentage)}% complete
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{course.price?.toLocaleString() || "999"}
          </div>
          <button
            onClick={handleAction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm"
          >
            {showProgress && isStarted ? "Continue" : "Enroll"}
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
