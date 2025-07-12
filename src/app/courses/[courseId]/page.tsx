"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Course, Module } from "@/lib/course-loader";
import ModuleList from "@/components/course/ModuleList";
import CourseProgress from "@/components/course/CourseProgress";
import { BookOpen, Clock, Users } from "lucide-react";
import api from "@/lib/api";

const CoursePage = () => {
  const params = useParams() as { courseId: string };
  const { courseId } = params;
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!courseId) return;
    const fetchCourse = async () => {
      const allCourses = await api.get('/api/courses');
      const courseData = allCourses.find((c: Course) => c.id === courseId);
      setCourse(courseData);
    };
    fetchCourse();
  }, [courseId]);

  if (!course || !Array.isArray(course.modules)) {
    return null;
  }

  const totalLessons = course.modules.reduce(
    (acc: number, module: Module) => acc + module.lessons.length,
    0
  );
  const estimatedHours = Math.ceil(totalLessons * 0.5);

  return (
    <div className="max-w-4xl px-4 py-8 bg-white dark:bg-slate-800 rounded-lg">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {course.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules.length} modules</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>~{estimatedHours}h</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <CourseProgress courseId={course.id} variant="compact" />
      </div>

      {/* Modules */}
      <ModuleList courseId={course.id} modules={course.modules} />
    </div>
  );
};

export default CoursePage;
