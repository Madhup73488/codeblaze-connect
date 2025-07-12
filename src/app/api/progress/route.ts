import { NextResponse } from 'next/server';
import { getAllCourses, Course } from '@/lib/course-loader';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const userFilePath = path.join(process.cwd(), 'user-data', 'user-1.json');
    const userFileContent = await fs.readFile(userFilePath, 'utf8');
    const userData = JSON.parse(userFileContent);

    const allCourses = await getAllCourses();
    const courseMappingFilePath = path.join(process.cwd(), 'internships', 'course_mapping.json');
    const courseMappingContent = await fs.readFile(courseMappingFilePath, 'utf8');
    const courseMapping = JSON.parse(courseMappingContent);

    let enrolledCourseIds = userData.enrolledCourses || [];
    if (userData.enrolledInternships) {
      userData.enrolledInternships.forEach((internshipId: string) => {
        if (courseMapping[internshipId]) {
          enrolledCourseIds = [...new Set([...enrolledCourseIds, ...courseMapping[internshipId]])];
        }
      });
    }

    const enrolledCourses = allCourses.filter((course: Course) => enrolledCourseIds.includes(course.id));

    const completedLessons = userData.completedLessons || [];

    const courseProgress: Record<string, {
      completedLessons: number;
      totalLessons: number;
      lastAccessed: string;
    }> = {};

    enrolledCourses.forEach((course: Course) => {
      const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
      const completedLessonsInCourse = completedLessons.filter(lesson => lesson.startsWith(course.id)).length;
      courseProgress[course.id] = {
        completedLessons: completedLessonsInCourse,
        totalLessons: totalLessons,
        lastAccessed: new Date().toISOString(),
      };
    });

    const userProgress = {
      completedLessons,
      courseProgress,
    };

    return NextResponse.json(userProgress);
  } catch (error) {
    console.error('Failed to get progress:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
