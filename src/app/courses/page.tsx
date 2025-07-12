'use client';
import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  BookOpen,
  Clock,
  Star,
  Users,
  ChevronRight,
  TrendingUp,
  Award,
} from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  lessons: number;
  hours: number;
  progress: number;
  instructor: string;
  difficulty: string;
  rating: number;
  students: number;
  price: number;
  category: string;
  tags: string[];
  trending: boolean;
  featured: boolean;
}

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", count: 10 },
    { id: "web", name: "Web Development", count: 4 },
    { id: "programming", name: "Programming", count: 3 },
    { id: "design", name: "Design", count: 3 },
  ];

  const allCourses = [
    {
      id: 1,
      title: "React Development",
      description:
        "Master modern React development with hooks, context, and best practices",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      lessons: 15,
      hours: 12,
      progress: 0,
      instructor: "Mike Chen",
      difficulty: "Intermediate",
      rating: 4.9,
      students: 2847,
      price: 899,
      category: "web",
      tags: ["React", "JavaScript", "Frontend"],
      trending: true,
      featured: false,
    },
    {
      id: 2,
      title: "Node.js Backend Development",
      description:
        "Build scalable backend applications with Node.js, Express, and MongoDB",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      lessons: 18,
      hours: 15,
      progress: 0,
      instructor: "Alex Rivera",
      difficulty: "Advanced",
      rating: 4.7,
      students: 1923,
      price: 1299,
      category: "web",
      tags: ["Node.js", "Backend", "API"],
      trending: false,
      featured: true,
    },
    {
      id: 3,
      title: "Python Fundamentals",
      description: "Complete introduction to Python programming for beginners",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      lessons: 10,
      hours: 8,
      progress: 0,
      instructor: "Lisa Wang",
      difficulty: "Beginner",
      rating: 4.8,
      students: 4231,
      price: 699,
      category: "programming",
      tags: ["Python", "Programming", "Beginner"],
      trending: true,
      featured: false,
    },
    {
      id: 4,
      title: "Advanced CSS & Animations",
      description:
        "Master modern CSS techniques, Grid, Flexbox, and smooth animations",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      lessons: 20,
      hours: 16,
      progress: 0,
      instructor: "Emily White",
      difficulty: "Intermediate",
      rating: 4.6,
      students: 1654,
      price: 799,
      category: "web",
      tags: ["CSS", "Animation", "Frontend"],
      trending: false,
      featured: false,
    },
    {
      id: 5,
      title: "Vue.js Essentials",
      description:
        "Learn Vue.js 3 composition API and build modern web applications",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      lessons: 14,
      hours: 11,
      progress: 0,
      instructor: "Chris Green",
      difficulty: "Beginner",
      rating: 4.5,
      students: 987,
      price: 599,
      category: "web",
      tags: ["Vue.js", "JavaScript", "Frontend"],
      trending: false,
      featured: false,
    },
    {
      id: 6,
      title: "Data Structures & Algorithms",
      description:
        "Master fundamental computer science concepts for technical interviews",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      lessons: 25,
      hours: 30,
      progress: 0,
      instructor: "David Lee",
      difficulty: "Advanced",
      rating: 4.9,
      students: 3421,
      price: 2999,
      category: "programming",
      tags: ["Algorithms", "Data Structures", "Interview Prep"],
      trending: true,
      featured: true,
    },
    {
      id: 7,
      title: "UI/UX Design Principles",
      description:
        "Learn user-centered design principles and create beautiful interfaces",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      lessons: 12,
      hours: 10,
      progress: 0,
      instructor: "Jessica Brown",
      difficulty: "Beginner",
      rating: 4.7,
      students: 2156,
      price: 1199,
      category: "design",
      tags: ["UI/UX", "Design", "Figma"],
      trending: false,
      featured: false,
    },
    {
      id: 8,
      title: "DevOps Fundamentals",
      description:
        "Understand CI/CD, containerization, and cloud deployment strategies",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      lessons: 16,
      hours: 14,
      progress: 0,
      instructor: "Robert Wilson",
      difficulty: "Intermediate",
      rating: 4.4,
      students: 1432,
      price: 1499,
      category: "programming",
      tags: ["DevOps", "Docker", "AWS"],
      trending: false,
      featured: false,
    },
    {
      id: 9,
      title: "Mobile Design Patterns",
      description: "Design beautiful and intuitive mobile app interfaces",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      lessons: 14,
      hours: 12,
      progress: 0,
      instructor: "Maria Garcia",
      difficulty: "Intermediate",
      rating: 4.6,
      students: 876,
      price: 899,
      category: "design",
      tags: ["Mobile Design", "UI", "Prototyping"],
      trending: false,
      featured: false,
    },
    {
      id: 10,
      title: "Mastering Framer Motion (In-Depth)",
      description:
        "Create stunning, interactive animations with Framer Motion from scratch.",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      lessons: 9,
      hours: 3,
      progress: 0,
      instructor: "Jane Doe",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 1500,
      price: 999,
      category: "design",
      tags: ["Framer Motion", "Animation", "React"],
      trending: true,
      featured: true,
    },
  ];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      course.difficulty.toLowerCase() === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "intermediate":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const CourseCard = ({ course }: { course: Course }) => (
    <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 overflow-hidden relative cursor-pointer">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-1">
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

      {/* Course Image/Header */}
      <div className="relative h-32 lg:h-36 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Image src={course.iconUrl} alt={course.title} width={64} height={64} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 lg:p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {course.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {course.tags.slice(0, 2).map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.hours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{(course.students / 1000).toFixed(1)}k</span>
          </div>
        </div>

        {/* Instructor & Difficulty */}
        <div className="flex items-center justify-between mb-4 text-xs">
          <div className="text-gray-600 dark:text-gray-400 truncate">
            by{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {course.instructor}
            </span>
          </div>
          <span
            className={`px-2 py-1 rounded-full font-medium border flex-shrink-0 ${getDifficultyColor(
              course.difficulty
            )}`}
          >
            {course.difficulty}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{course.price.toLocaleString()}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 text-sm cursor-pointer">
            Enroll
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Explore Courses
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Discover your next learning adventure with our expert-led courses
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search courses, skills, or topics..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white min-w-[140px]"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 sticky top-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-700 font-medium dark:bg-blue-500/20 dark:text-blue-300"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {filteredCourses.length} Course
                  {filteredCourses.length !== 1 ? "s" : ""} Found
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {selectedCategory !== "all" &&
                    `in ${
                      categories.find((c) => c.id === selectedCategory)?.name
                    }`}
                  {selectedDifficulty !== "all" &&
                    ` • ${selectedDifficulty} level`}
                </p>
              </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search or filters
                </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setSelectedDifficulty("all");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer"
                  >
                    Clear All Filters
                  </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
