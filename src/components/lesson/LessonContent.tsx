'use client';
import React, { useEffect, useState } from "react";
import { Lesson, Course } from '@/lib/course-loader';
import VideoPlayer from '@/components/lesson/VideoPlayer';
import InteractiveCode from '@/components/lesson/InteractiveCode';
import {
  Code,
  FileText,
  Play,
  Clock,
  Target,
  BookOpen,
  Trophy,
  ChevronRight,
} from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";
import LessonNavigation from "./LessonNavigation";
import Link from "next/link";

interface LessonContentProps {
  lesson: Lesson;
  courseId: string;
  moduleId: string;
  lessonId: string;
  course: Course;
}

type LessonType = "text" | "video" | "interactive";

const LessonContent = ({
  lesson,
  courseId,
  moduleId,
  lessonId,
  course,
}: LessonContentProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress loading
    const timer = setTimeout(() => setProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  const getTypeIcon = (type: LessonType) => {
    switch (type) {
      case "video":
        return <Play className="w-5 h-5" />;
      case "interactive":
        return <Code className="w-5 h-5" />;
      case "text":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeGradient = (type: LessonType) => {
    switch (type) {
      case "video":
        return "from-blue-500 to-cyan-500";
      case "interactive":
        return "from-emerald-500 to-teal-500";
      case "text":
        return "from-violet-500 to-purple-500";
      default:
        return "from-slate-500 to-gray-500";
    }
  };

  const getTypeBg = (type: LessonType) => {
    switch (type) {
      case "video":
        return "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/50 dark:from-blue-900/50 dark:to-cyan-900/50 dark:border-blue-800/50";
      case "interactive":
        return "bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200/50 dark:from-emerald-900/50 dark:to-teal-900/50 dark:border-emerald-800/50";
      case "text":
        return "bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200/50 dark:from-violet-900/50 dark:to-purple-900/50 dark:border-violet-800/50";
      default:
        return "bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200/50 dark:from-slate-900/50 dark:to-gray-900/50 dark:border-slate-800/50";
    }
  };

  const currentModule = course.modules.find((m) => m.id === moduleId);
  const currentLessonIndex =
    currentModule?.lessons.findIndex((l) => l.id === lessonId) ?? 0;
  const totalLessons = currentModule?.lessons.length ?? 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-slate-900 dark:via-blue-900/30 dark:to-indigo-900/50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4 animate-slideDown">
            <Link href={`/courses/${courseId}`} className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">{course.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/courses/${courseId}`} className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">{currentModule?.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 dark:text-white font-medium">{lesson.title}</span>
          </nav>

         
          <div className="lg:grid lg:grid-cols-1 gap-8">
            <div className="lg:col-span-1">
              
              {/* Lesson Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-4 animate-slideUp">
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm ${getTypeBg(
                    lesson.type || "text"
                  )}`}
                >
                  <div
                    className={`p-1 rounded-full bg-gradient-to-r ${getTypeGradient(
                      lesson.type || "text"
                    )} text-white`}
                  >
                    {getTypeIcon(lesson.type || "text")}
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
                    {lesson.type || "text"} Lesson
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/40 dark:border-slate-700/40">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {lesson.duration || "15 min"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/40 dark:border-slate-700/40">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {lesson.difficulty || "Beginner"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1
                className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300 mb-4 leading-tight animate-slideUp"
                style={{ animationDelay: "0.1s" }}
              >
                {lesson.title}
              </h1>

              {/* Description */}
              <p
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                {lesson.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-3xl border border-white/40 dark:border-slate-700/40 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 overflow-hidden animate-slideUp"
          style={{ animationDelay: "0.5s" }}
        >
          {lesson.type === "video" && (
            <div className="animate-fadeIn">
              <VideoPlayer
                src={`/videos/${lesson.id}.mp4`}
                courseId={courseId}
                moduleId={moduleId}
                lessonId={lessonId}
              />
            </div>
          )}

          {lesson.type === "interactive" && (
            <div className="p-8 animate-fadeIn">
              <InteractiveCode
                initialCode={lesson.content || `// Start coding here`}
                solution={`// Solution code`}
              />
            </div>
          )}

          {lesson.type === "text" && lesson.content && (
            <div className="animate-fadeIn prose prose-lg prose-slate max-w-none rounded-2xl p-8 border border-slate-200 dark:border-slate-700 prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-slate-900 dark:prose-strong:text-white prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-pre:text-slate-900 dark:prose-pre:text-white">
              <MarkdownRenderer content={lesson.content} />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div
          className="mt-8 animate-slideUp"
          style={{ animationDelay: "0.6s" }}
        >
          <LessonNavigation
            course={course}
            currentModule={moduleId}
            currentLesson={lessonId}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default LessonContent;
