"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  TrendingUp,
  CheckCircle,
  Briefcase,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import api from "@/lib/api";

// Simplified interfaces
interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
}

interface Stat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loadDashboardData = () => {
      if (user) {
        const cachedCourses = localStorage.getItem('courses');
        const cachedInternships = localStorage.getItem('internships');
        const cachedProgress = localStorage.getItem('progress');

        if (cachedCourses && cachedInternships && cachedProgress) {
          const allCourses = JSON.parse(cachedCourses);
          const allInternships = JSON.parse(cachedInternships);
          const progress = JSON.parse(cachedProgress);

          const courseIds = user.accessible_course_ids || [];
          const enrolledCourses = allCourses.filter((course: any) =>
            courseIds.includes(course.id)
          );

          const coursesWithProgress = enrolledCourses.map((course: any) => {
            const courseProgress = progress.courseProgress[course.id] || { completedLessons: 0, totalLessons: 0 };
            return {
              ...course,
              progress: courseProgress.totalLessons > 0 ? (courseProgress.completedLessons / courseProgress.totalLessons) * 100 : 0,
            };
          });

          setCourses(coursesWithProgress);

          const internshipIds = user.accessible_internship_ids || [];
          const enrolledInternships = allInternships.filter((internship: any) =>
            internshipIds.includes(internship.id)
          );

          const newStats: Stat[] = [
            {
              label: "In Progress",
              value: coursesWithProgress.filter((c: any) => c.progress > 0 && c.progress < 100)
                .length,
              icon: <BookOpen className="w-6 h-6 text-blue-500" />,
            },
            {
              label: "Completed",
              value: coursesWithProgress.filter((c: any) => c.progress === 100).length,
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
      }
    };

    loadDashboardData();
  }, [user]);


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
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </div>

          {/* All Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Learning Path</h3>
            <div className="space-y-4">
              {courses.map((course) => (
                <CourseListItem key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-component for a course card
const CourseCard = ({ course }: { course: Course }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="font-bold text-lg">{course.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          by {course.instructor}
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
          {course.progress}%
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
);

// Sub-component for a course list item
const CourseListItem = ({ course }: { course: Course }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
    <div className="flex-shrink-0">
      {course.progress === 100 ? (
        <CheckCircle className="w-8 h-8 text-green-500" />
      ) : (
        <BookOpen className="w-8 h-8 text-blue-500" />
      )}
    </div>
    <div className="flex-grow">
      <h4 className="font-semibold">{course.title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        by {course.instructor}
      </p>
    </div>
    <div className="w-24 text-right">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
        {course.progress}%
      </p>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-1">
        <div
          className={`h-1 rounded-full ${
            course.progress === 100 ? "bg-green-500" : "bg-blue-600"
          }`}
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
  </div>
);

export default Dashboard;
