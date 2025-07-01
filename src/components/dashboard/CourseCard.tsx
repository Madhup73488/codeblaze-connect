'use client';
import React from 'react';
import { 
  ChevronRight,
  Clock,
  BarChart3,
  CheckCircle,
  BookOpen,
  Star
} from 'lucide-react';

import Link from 'next/link';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    lessons: number;
    hours: number;
    progress: number;
    color: string;
    icon: string;
    instructor: string;
    difficulty: string;
    rating: number;
    enrolled: boolean;
    completed: boolean;
  };
}

const CourseCard = ({ course }: CourseCardProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className={`${course.color} h-32 flex items-center justify-center relative`}>
      <div className="text-4xl opacity-80">{course.icon}</div>
      {course.completed && (
        <div className="absolute top-4 left-4">
          <div className="bg-green-500 text-white rounded-full p-1">
            <CheckCircle size={16} />
          </div>
        </div>
      )}
      <div className="absolute top-4 right-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
          <BarChart3 size={16} className="text-white" />
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star size={14} fill="currentColor" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{course.description}</p>
      <p className="text-sm text-gray-500 mb-4">by {course.instructor}</p>
      
      <div className="flex justify-between text-xs text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <BookOpen size={12} />
          {course.lessons} lessons
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {course.hours} hours
        </span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
          course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {course.difficulty}
        </span>
      </div>
      
      {course.enrolled && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-semibold text-gray-900">{course.progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      )}
      
      {course.enrolled ? (
        <Link href={`/courses/${course.id}`} className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
          course.completed
          ? 'bg-green-600 text-white'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
        }`}>
          {course.completed ? 'Completed' : 'Continue Learning'}
          <ChevronRight size={16} />
        </Link>
      ) : (
        <button className="w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
          Buy Now
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  </div>
);

export default CourseCard;
