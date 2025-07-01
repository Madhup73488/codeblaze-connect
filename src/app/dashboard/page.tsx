"use client";
import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  PlayCircle,
  Users,
  Calendar,
  Target,
  Zap,
  ChevronRight,
  Star,
  Trophy,
  Brain,
  Code,
  Palette,
  Database,
  BarChart3,
  CheckCircle,
  ArrowUp,
  ArrowRight,
  Sparkles,
  Volume2,
  Settings,
  Bell,
  Search,
  Filter,
  Heart,
  BookmarkPlus,
  Share,
  Eye,
  Download,
  Briefcase,
} from "lucide-react";
import CourseCard from "@/components/course/CourseCard";
import apiClient from "@/lib/api";

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  rating: number;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  level: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  nextLesson: string;
  lastActivity: string;
  students: string;
  difficulty: number;
}

interface Stat {
  label: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface Activity {
  action: string;
  item: string;
  time: string;
  type: string;
  icon: React.ReactNode;
}

interface Deadline {
  course: string;
  task: string;
  dueDate: string;
  urgent: boolean;
  priority: string;
}

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [timeOfDay, setTimeOfDay] = useState("morning");
  const [isAnimating, setIsAnimating] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState<Deadline[]>([]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("morning");
    else if (hour < 18) setTimeOfDay("afternoon");
    else setTimeOfDay("evening");

    const fetchData = async () => {
      try {
        const response = await apiClient.get("/connect/user/data");
        const data = await response.data;

        setCourses(data.enrolledInternships[0].courses);
        setStats(
          data.stats.map((stat: any) => ({
            ...stat,
            icon:
              stat.label === "Active Internships" ? (
                <Briefcase className="w-6 h-6" />
              ) : stat.label === "Hours Learned" ? (
                <Clock className="w-6 h-6" />
              ) : stat.label === "Tasks Done" ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <TrendingUp className="w-6 h-6" />
              ),
          }))
        );
        setRecentActivity(
          data.achievements.map((achievement: any) => ({
            action: "Achievement Unlocked",
            item: achievement.title,
            time: achievement.date,
            type: "certificate",
            icon: <Trophy className="w-5 h-5" />,
          }))
        );
        setUpcomingDeadlines([]);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchData();
    // Trigger initial animation
    setTimeout(() => setIsAnimating(true), 100);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:border-emerald-800/50";
      case "Intermediate":
        return "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800/50";
      case "Advanced":
        return "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/50 dark:text-rose-300 dark:border-rose-800/50";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/50 dark:text-gray-300 dark:border-gray-800/50";
    }
  };

  const getPriorityColor = (priority: string, urgent: boolean) => {
    if (urgent) return "from-red-500 to-pink-500";
    switch (priority) {
      case "high":
        return "from-orange-500 to-red-500";
      case "medium":
        return "from-blue-500 to-cyan-500";
      case "low":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getGreeting = () => {
    const greetings: { [key: string]: string } = {
      morning: "Good morning! Ready to learn?",
      afternoon: "Good afternoon! Keep up the great work!",
      evening: "Good evening! Wind down with some learning?",
    };
    return greetings[timeOfDay];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -left-4 w-72 h-72 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-8 right-1/3 w-72 h-72 bg-gradient-to-r from-emerald-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/20 shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent dark:from-white dark:via-purple-300 dark:to-blue-300">
                  LearnHub
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {getGreeting()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors relative">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>

              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 px-4 py-2 rounded-2xl border border-orange-200 dark:border-orange-800/50">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-bold text-orange-800 dark:text-orange-200">
                  {
                    stats.find((stat) => stat.label === "Learning Streak")
                      ?.value
                  }{" "}
                  day streak!
                </span>
                <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>

              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                <span className="text-sm font-bold text-white">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 transform transition-all duration-1000 ${
            isAnimating
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-slate-700/50 hover:scale-[1.02] hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} dark:opacity-20 opacity-50 group-hover:opacity-70 dark:group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <ArrowUp className="w-5 h-5 text-green-500 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning Section */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 flex items-center">
                      <PlayCircle className="w-6 h-6 mr-2" />
                      Continue Learning
                    </h2>
                    <p className="text-purple-100">
                      Pick up where you left off and keep the momentum going
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {courses
                  .filter(
                    (course) => course.progress > 0 && course.progress < 100
                  )
                  .map((course, index) => (
                    <div
                      key={course.id}
                      className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.01]"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div
                        className={`relative overflow-hidden bg-gradient-to-r ${course.bgColor} dark:opacity-80 rounded-2xl p-6 border border-white/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-6">
                          <div
                            className={`relative w-20 h-20 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            {course.icon}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-xs font-bold text-gray-800 dark:text-white">
                                {Math.floor(course.progress / 10)}
                              </span>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                                {course.title}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(
                                    course.level
                                  )}`}
                                >
                                  {course.level}
                                </span>
                                <button className="p-2 hover:bg-white/50 dark:hover:bg-slate-700/50 rounded-full transition-colors">
                                  <BookmarkPlus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium dark:text-gray-300">
                                  {course.rating}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {course.students}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {course.duration}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {course.lastActivity}
                                </span>
                              </div>
                            </div>

                            <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-4 mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Next Lesson
                                </span>
                                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                                  {course.completedLessons}/
                                  {course.totalLessons}
                                </span>
                              </div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {course.nextLesson}
                              </p>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  Progress
                                </span>
                                <span className="text-sm font-bold text-gray-900 dark:text-white">
                                  {course.progress}%
                                </span>
                              </div>
                              <div className="relative">
                                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
                                  <div
                                    className={`h-3 rounded-full bg-gradient-to-r ${course.color} transition-all duration-1000 shadow-sm`}
                                    style={{ width: `${course.progress}%` }}
                                  ></div>
                                </div>
                                <div
                                  className="absolute top-0 h-3 bg-white/30 dark:bg-slate-600/30 rounded-full transition-all duration-1000"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* All Courses */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50">
              <div className="p-6 border-b border-gray-200/50 dark:border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      My Learning Path
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Track your progress across all courses
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                      <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                      <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <div
                      key={course.id}
                      className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`relative overflow-hidden bg-gradient-to-r ${course.bgColor} dark:opacity-80 rounded-2xl p-6 border border-white/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 h-full`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {course.icon}
                          </div>
                          <div className="flex items-center space-x-2">
                            {course.progress === 100 && (
                              <div className="flex items-center space-x-1 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full border border-green-200 dark:border-green-800/50">
                                <Trophy className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <span className="text-xs font-bold text-green-700 dark:text-green-300">
                                  Completed
                                </span>
                              </div>
                            )}
                            <button className="p-2 hover:bg-white/50 dark:hover:bg-slate-700/50 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                              <Share className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                          </div>
                        </div>

                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          by {course.instructor}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-400">
                              {course.students}
                            </span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelColor(
                              course.level
                            )}`}
                          >
                            {course.level}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-1000`}
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {course.rating}
                              </span>
                            </div>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                              {course.progress}% Complete
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Learning Goals */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 mr-2" />
                  <h3 className="font-bold text-lg">Weekly Goal</h3>
                </div>
                <p className="text-purple-100 mb-4">
                  Complete 3 lessons across all courses
                </p>
                <div className="relative">
                  <div className="bg-white/20 rounded-full h-3 mb-2">
                    <div
                      className="bg-white h-3 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-100">2 of 3 lessons</span>
                    <span className="font-bold">60%</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">1 more lesson to go!</span>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50">
              <div className="p-6 border-b border-gray-200/50 dark:border-slate-700/50">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-red-500" />
                  Upcoming Deadlines
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl p-4 border-l-4 bg-gradient-to-r ${
                      deadline.urgent
                        ? "from-red-50 to-pink-50 dark:from-red-900/50 dark:to-pink-900/50 border-red-400 dark:border-red-600"
                        : "from-blue-50 to-cyan-50 dark:from-blue-900/50 dark:to-cyan-900/50 border-blue-400 dark:border-blue-600"
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${getPriorityColor(
                        deadline.priority,
                        deadline.urgent
                      )} animate-pulse`}
                    ></div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                      {deadline.task}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {deadline.course}
                    </p>
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-xs font-bold ${
                          deadline.urgent
                            ? "text-red-600 dark:text-red-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        Due {deadline.dueDate}
                      </p>
                      {deadline.urgent && (
                        <span className="bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-xs font-bold">
                          Urgent
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50">
              <div className="p-6 border-b border-gray-200/50 dark:border-slate-700/50">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Recent Activity
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <div
                      className={`p-2 rounded-full ${
                        activity.type === "certificate"
                          ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400"
                          : activity.type === "course"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                          : "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
                      } flex-shrink-0`}
                    >
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 dark:text-white font-medium">
                        <span className="font-bold">{activity.action}</span>{" "}
                        {activity.item}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Showcase */}
            <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 mr-2" />
                <h3 className="font-bold text-lg">Latest Achievement</h3>
              </div>
              <div className="bg-white/20 rounded-2xl p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Python Master</h4>
                    <p className="text-sm text-orange-100">
                      Completed Python Fundamentals
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-100">
                  Earned 3 days ago
                </span>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-medium transition-colors dark:bg-white/10 dark:hover:bg-white/20">
                  Share
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-500" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-xl hover:shadow-md transition-all duration-200 border border-purple-100 dark:border-purple-800/50">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Browse Courses
                  </span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-900/50 rounded-xl hover:shadow-md transition-all duration-200 border border-green-100 dark:border-green-800/50">
                  <Download className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Download Materials
                  </span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/50 dark:to-cyan-900/50 rounded-xl hover:shadow-md transition-all duration-200 border border-blue-100 dark:border-blue-800/50">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Study Groups
                  </span>
                </button>
                <button className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl hover:shadow-md transition-all duration-200 border border-orange-100 dark:border-orange-800/50">
                  <Settings className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Settings
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl hover:shadow-purple-500/25 hover:scale-110 transition-all duration-300 flex items-center justify-center group">
            <PlayCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-slate-700 z-50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-1000"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
