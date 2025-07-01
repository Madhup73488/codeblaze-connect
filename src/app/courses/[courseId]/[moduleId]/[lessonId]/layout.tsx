import React from 'react';
import CourseLayout from '@/components/lesson/CourseLayout';
import { getCourseStructure, getLesson } from '@/lib/course-loader';
import { notFound } from 'next/navigation';
import { FocusModeProvider } from '@/contexts/FocusModeContext';

interface LessonLayoutProps {
  children: React.ReactNode;
  params: {
    courseId: string;
    moduleId: string;
    lessonId: string;
  };
}

export default async function LessonLayout({ children, params }: LessonLayoutProps) {
  const course = await getCourseStructure(params.courseId);
  const lesson = await getLesson(params.courseId, params.moduleId, params.lessonId);

  if (!course || !lesson) {
    notFound();
  }

  return (
    <FocusModeProvider>
      <CourseLayout course={course} lesson={lesson}>
        {children}
      </CourseLayout>
    </FocusModeProvider>
  );
}
