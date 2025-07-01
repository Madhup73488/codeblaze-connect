import React from 'react';
import Link from 'next/link';
import { Course } from '@/lib/course-loader';
import Button from '@/components/ui/Button';

interface LessonNavigationProps {
  course: Course;
  currentModule: string;
  currentLesson: string;
}

const LessonNavigation = ({ course, currentModule, currentLesson }: LessonNavigationProps) => {
  const currentModuleIndex = course.modules.findIndex((m) => m.id === currentModule);
  const currentLessonIndex = course.modules[currentModuleIndex]?.lessons.findIndex((l) => l.id === currentLesson);

  const previousLesson =
    currentLessonIndex > 0
      ? course.modules[currentModuleIndex].lessons[currentLessonIndex - 1]
      : currentModuleIndex > 0
      ? course.modules[currentModuleIndex - 1].lessons[course.modules[currentModuleIndex - 1].lessons.length - 1]
      : null;

  const nextLesson =
    currentLessonIndex < course.modules[currentModuleIndex]?.lessons.length - 1
      ? course.modules[currentModuleIndex].lessons[currentLessonIndex + 1]
      : currentModuleIndex < course.modules.length - 1
      ? course.modules[currentModuleIndex + 1].lessons[0]
      : null;

  const prevModuleId =
    currentLessonIndex === 0 && currentModuleIndex > 0
      ? course.modules[currentModuleIndex - 1].id
      : currentModule;
      
  const nextModuleId =
    currentLessonIndex === course.modules[currentModuleIndex]?.lessons.length - 1 && currentModuleIndex < course.modules.length - 1
      ? course.modules[currentModuleIndex + 1].id
      : currentModule;

  return (
    <div className="flex justify-between mt-8">
      {previousLesson ? (
        <Link href={`/courses/${course.id}/${prevModuleId}/${previousLesson.id}`}>
          <Button>Previous Lesson</Button>
        </Link>
      ) : (
        <div />
      )}
      {nextLesson ? (
        <Link href={`/courses/${course.id}/${nextModuleId}/${nextLesson.id}`}>
          <Button>Next Lesson</Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default LessonNavigation;
