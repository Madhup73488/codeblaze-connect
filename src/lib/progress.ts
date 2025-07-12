import { Course } from './course-loader';

// This is a placeholder for the actual user progress data
// which will be fetched from the backend.
interface UserProgress {
  completedLessons: string[];
}

export const canAccessLesson = (
  userProgress: UserProgress,
  courseId: string,
  moduleId: string,
  lessonId: string,
  courseStructure: Course
): boolean => {
  const currentModule = courseStructure.modules.find(m => m.id === moduleId);
  if (!currentModule) return false;
  
  const lesson = currentModule.lessons.find(l => l.id === lessonId);
  if (!lesson) return false;
  
  // First lesson is always accessible
  if (lesson.order === 1 && currentModule.order === 1) return true;
  
  // Check if previous lesson in same module is completed
  const previousLesson = currentModule.lessons.find(l => l.order === lesson.order - 1);
  if (previousLesson) {
    const progressKey = `${courseId}-${moduleId}-${previousLesson.id}`;
    return userProgress.completedLessons.includes(progressKey);
  }
  
  // If first lesson of module, check if previous module is completed
  if (lesson.order === 1) {
    const previousModule = courseStructure.modules.find(m => m.order === currentModule.order - 1);
    if (previousModule) {
      const lastLessonOfPrevModule = previousModule.lessons[previousModule.lessons.length - 1];
      const progressKey = `${courseId}-${previousModule.id}-${lastLessonOfPrevModule.id}`;
      return userProgress.completedLessons.includes(progressKey);
    }
  }
  
  return false;
};

export const getNextLesson = (
  course: Course,
  completedLessons: string[]
): { moduleId: string; lessonId: string; title: string } | null => {
  for (const m of course.modules) {
    for (const lesson of m.lessons) {
      const progressKey = `${course.id}-${m.id}-${lesson.id}`;
      if (!completedLessons.includes(progressKey)) {
        return { moduleId: m.id, lessonId: lesson.id, title: lesson.title };
      }
    }
  }
  return null;
};
