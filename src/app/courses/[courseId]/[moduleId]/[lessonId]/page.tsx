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
  const course = await getCourseStructure(params.courseId);
  const lesson = await getLesson(
    params.courseId,
    params.moduleId,
    params.lessonId
  );

  if (!course || !lesson) {
    notFound();
  }

  return (
    <LessonContent
      courseId={params.courseId}
      moduleId={params.moduleId}
      lessonId={params.lessonId}
      lesson={lesson}
      course={course}
    />
  );
};

export default LessonPage;
