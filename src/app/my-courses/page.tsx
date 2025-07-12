'use client';
import React, { useState, useEffect } from 'react';
import { 
  Filter,
  Search,
  Play,
  Clock,
  Users,
  BookOpen,
  Book,
  Trophy,
  Star,
  ChevronRight,
  Calendar,
  Target,
  Award,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import { getNextLesson } from '@/lib/progress';
import { Course } from '@/lib/course-loader';

const iconMap: { [key: string]: React.ElementType } = {
  BookOpen,
  Trophy,
  TrendingUp,
  Target,
  Book,
};

const MyCoursesPage = () => {
  const { user, loading: authLoading } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [stats, setStats] = useState<any[]>([]);
  const [userProgress, setUserProgress] = useState<any>(null);

  useEffect(() => {
    const loadCoursesAndProgress = () => {
      if (authLoading || !user) return;

      const cachedCourses = localStorage.getItem('courses');
      const cachedProgress = localStorage.getItem('progress');

      if (cachedCourses && cachedProgress) {
        const allCourses = JSON.parse(cachedCourses);
        const progress = JSON.parse(cachedProgress);
        const courseIds = user.accessible_course_ids || [];
        const enrolledCourses = allCourses.filter((course: any) =>
          courseIds.includes(course.id)
        );
        setAllCourses(enrolledCourses);
        setUserProgress(progress);
      } else {
        const fetchCoursesAndProgress = async () => {
          let courseIds: string[] = user.accessible_course_ids || [];

          if (user.accessible_internship_ids && user.accessible_internship_ids.length > 0) {
            const courseMapping = await api.get('/api/course-mapping');
            const internshipCourseIds = user.accessible_internship_ids.flatMap(
              (internshipId: string) => courseMapping[internshipId] || []
            );
            courseIds = [...new Set([...courseIds, ...internshipCourseIds])];
          }

          if (courseIds.length > 0) {
            const [allCoursesResponse, progress] = await Promise.all([
              api.get('/api/courses'),
              api.get('/api/progress'),
            ]);

            const enrolledCourses = allCoursesResponse.filter((course: any) =>
              courseIds.includes(course.id)
            );

            setAllCourses(enrolledCourses);
            setUserProgress(progress);
            localStorage.setItem('courses', JSON.stringify(allCoursesResponse));
            localStorage.setItem('progress', JSON.stringify(progress));
          }
        };
        fetchCoursesAndProgress();
      }
    };

    loadCoursesAndProgress();
  }, [user, authLoading]);

  const CourseCard = ({ course }: { course: any }) => {
    const continueLink = `/courses/${course.id}`;

    return (
      <Link href={continueLink}>
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600 flex flex-col h-[420px] overflow-hidden">
          {/* Course Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white text-xl shadow-lg`}>
          {course.icon}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Course Info */}
      <div className="mb-4 flex-grow min-h-[150px]">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 min-h-[40px]">{course.description}</p>
        
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.hours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{course.instructor}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span className={`px-2 py-1 rounded-full font-medium ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
          }`}>
            {course.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {course.lastAccessed}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-gray-700 dark:text-gray-300">Progress</span>
          <span className="font-bold text-gray-900 dark:text-white">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
          <div 
            className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-500`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
        {course.completed ? (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium min-h-[20px]"> {/* Added min-h for consistent height */}
            <Trophy className="w-4 h-4" />
            Course Completed!
          </div>
        ) : (
          <div className="text-sm text-gray-600 dark:text-gray-400 min-h-[20px]"> {/* Added min-h for consistent height */}
            Next: <span className="font-medium text-gray-800 dark:text-gray-200 line-clamp-1">{course.nextLesson}</span> {/* Added line-clamp-1 */}
          </div>
        )}
      </div>

      {/* Action Button */}
      <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
        course.completed 
          ? 'bg-green-50 text-green-700 hover:bg-green-100' 
          : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
      }`}>
        {course.completed ? (
          <>
            <Award className="w-4 h-4" />
            View Certificate
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Continue Learning
          </>
        )}
      </button>
    </div>
    </Link>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Courses</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">Continue your learning journey</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">89h</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Learning</div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gray-50 dark:bg-slate-700`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search your courses..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
            />
          </div>
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Current Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Continue Learning</h2>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {authLoading ? (
              <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                Loading courses...
              </div>
            ) : allCourses.length > 0 ? (
              allCourses
                .filter(course => !course.completed)
                .filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
            ) : (
              <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
                No courses enrolled.
              </div>
            )}
          </div>
        </div>

        {/* Completed Courses */}
        {allCourses.some(course => course.completed) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Completed Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allCourses
                .filter(course => course.completed)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h2>
            <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                achievement.earned 
                  ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/50 dark:to-orange-900/50 dark:border-yellow-800/50 shadow-md' 
                  : 'border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800 opacity-70'
              }`}>
                {achievement.earned && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="w-3 h-3" />
                  </div>
                )}
                
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                
                {achievement.earned ? (
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    Earned {achievement.date}
                  </div>
                ) : achievement.progress && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-between mb-1">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-1">
                      <div 
                        className="h-1 bg-blue-500 rounded-full transition-all duration-300"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Explore More */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ready for More?</h3>
            <p className="text-blue-100 mb-6">Explore our full catalog of courses and continue growing your skills</p>
            <Link href="/courses">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-200 transition-colors shadow-lg">
                Explore All Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoursesPage;
