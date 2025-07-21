"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  TrendingUp,
  CheckCircle,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import { getNextLesson } from "@/lib/progress";
import { type Course } from "@/lib/course-loader";

// Simplified interfaces
interface CourseWithProgress extends Course {
  progress: number;
}

interface InternshipData {
  id: string;
}

interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface User {
  name: string;
  accessible_course_ids: string[];
  accessible_internship_ids: string[];
}

interface Progress {
  courseProgress: {
    [courseId: string]: {
      completedLessons: number;
      lastAccessed: string;
      timeSpent: number;
    };
  };
  completedLessons: string[];
}

interface DashboardClientProps {
  user: User;
  allCourses: Course[];
  allInternships: InternshipData[];
  initialProgress: Progress;
}

const DashboardClient = ({ user: initialUser, allCourses, allInternships, initialProgress }: DashboardClientProps) => {
  const { user } = useAuth();
  const { progress: userProgress } = useProgress(initialProgress);
  const [courses, setCourses] = useState<CourseWithProgress[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const currentUser = user || initialUser;
    const loadDashboardData = () => {
      if (currentUser && userProgress && allCourses && allInternships) {
        const courseIds = currentUser.accessible_course_ids || [];
        const enrolledCourses = allCourses.filter((course) =>
          courseIds.includes(course.id)
        );

        const coursesWithProgress = enrolledCourses.map((course) => {
          const courseProgress = userProgress.courseProgress[course.id] || {
            completedLessons: 0,
            lastAccessed: '',
            timeSpent: 0,
          };
          const totalLessons = course.modules.reduce(
            (acc, module) => acc + module.lessons.length,
            0
          );
          return {
            ...course,
            progress:
              totalLessons > 0
                ? Math.round((courseProgress.completedLessons / totalLessons) * 100)
                : 0,
          };
        });

        setCourses(coursesWithProgress);

        const internshipIds = currentUser.accessible_internship_ids || [];
        const enrolledInternships = allInternships.filter(
          (internship: InternshipData) =>
            internshipIds.includes(internship.id)
        );

        const newStats: Stat[] = [
          {
            label: "In Progress",
            value: coursesWithProgress.filter(
              (c) => c.progress > 0 && c.progress < 100
            ).length,
            icon: <BookOpen className="w-6 h-6 text-blue-500" />,
          },
          {
            label: "Completed",
            value: coursesWithProgress.filter((c) => c.progress === 100)
              .length,
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
          },
          {
            label: "Learning Streak",
            value: "12 days", // This can be calculated in a real app
            icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
          },
          {
            label: "Active Internships",
            value: enrolledInternships.length,
            icon: <Briefcase className="w-6 h-6 text-orange-500" />,
          },
        ];
        setStats(newStats);
      }
    };

    loadDashboardData();
  }, [user, initialUser, userProgress, allCourses, allInternships]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            {getGreeting()}, {user?.name || "Learner"}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Let's continue your learning journey.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center space-x-4"
            >
              <div className="flex-shrink-0">{stat.icon}</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="space-y-8">
          {/* Continue Learning */}
          <div>
            <h3 className="text-xl font-bold mb-4">Continue Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses
                .filter((c) => c.progress > 0 && c.progress < 100)
                .map((course) => (
                  <CourseCard key={course.id} course={course} userProgress={userProgress} />
                ))}
            </div>
          </div>

          {/* All Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Learning Path</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} userProgress={userProgress} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-component for a course card
const CourseCard = ({ course, userProgress }: { course: CourseWithProgress, userProgress: Progress }) => {
  const nextLesson = getNextLesson(course, userProgress?.completedLessons || []);
  const continueLink = nextLesson
    ? `/courses/${course.id}/${nextLesson.moduleId}/${nextLesson.lessonId}`
    : `/courses/${course.id}`;

  return (
    <Link href={continueLink}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-lg">{course.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Codeblaze Academy
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Progress
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {Math.round(course.progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardClient;
