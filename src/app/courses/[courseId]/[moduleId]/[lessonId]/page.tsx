import React from "react";
import { getCourseStructure, getLesson } from "@/lib/course-loader";
import { notFound } from "next/navigation";
import LessonContent from "@/components/lesson/LessonContent";

interface LessonPageProps {
  params: {
    courseId: string;
    moduleId: string;
    lessonId: string;
  };
}

const LessonPage = async ({ params }: LessonPageProps) => {
  const { courseId, moduleId, lessonId } = params;
  const course = await getCourseStructure(courseId);
  const lesson = await getLesson(
    courseId,
    moduleId,
    lessonId
  );

  if (!course || !lesson) {
    notFound();
  }

  return (
    <LessonContent
      courseId={courseId}
      moduleId={moduleId}
      lessonId={lessonId}
      lesson={lesson}
      course={course}
    />
  );
};

export default LessonPage;
