import React from 'react';
import CourseLayout from '@/components/lesson/CourseLayout';
import { getCourseStructure, getLesson } from '@/lib/course-loader';
import { notFound } from 'next/navigation';
import { FocusModeProvider } from '@/contexts/FocusModeContext';

export default async function LessonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string; moduleId: string; lessonId: string };
}) {
  const { courseId, moduleId, lessonId } = params;
  const course = await getCourseStructure(courseId);
  const lesson = await getLesson(courseId, moduleId, lessonId);

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
