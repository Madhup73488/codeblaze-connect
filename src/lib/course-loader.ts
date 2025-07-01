import fs from 'fs/promises';
import path from 'path';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  order: number;
  duration: number;
  type: 'text' | 'video' | 'interactive';
  content?: string;
  difficulty?: string;
}

export const getCourseStructure = async (courseId: string): Promise<Course> => {
  const coursePath = path.join(process.cwd(), 'courses', courseId);
  const courseJsonContent = await fs.readFile(
    path.join(coursePath, 'course.json'),
    'utf8'
  );
  const courseJson = JSON.parse(courseJsonContent);

  // Load modules and lessons
  const moduleFolders = await fs.readdir(coursePath);
  const modules = await Promise.all(
    moduleFolders
      .filter((folder) => !folder.endsWith('.json'))
      .map(async (moduleId: string) => {
        const modulePath = path.join(coursePath, moduleId);
        const moduleJsonContent = await fs.readFile(
          path.join(modulePath, 'module.json'),
          'utf8'
        );
        const moduleJson = JSON.parse(moduleJsonContent);

        const lessonFolders = await fs.readdir(modulePath);
        const lessons = await Promise.all(
          lessonFolders
            .filter((folder) => !folder.endsWith('.json'))
            .map(async (lessonId: string) => {
              const lessonPath = path.join(modulePath, lessonId);
              const lessonJsonContent = await fs.readFile(
                path.join(lessonPath, 'lesson.json'),
                'utf8'
              );
              const lessonJson = JSON.parse(lessonJsonContent);
              try {
                const contentPath = path.join(lessonPath, 'content.md');
                const content = await fs.readFile(contentPath, 'utf8');
                return { ...lessonJson, id: lessonId, content };
              } catch {
                return { ...lessonJson, id: lessonId };
              }
            })
        );

        return { ...moduleJson, id: moduleId, lessons };
      })
  );

  return { ...courseJson, id: courseId, modules };
};

export const getLesson = async (
  courseId: string,
  moduleId: string,
  lessonId: string
): Promise<Lesson | null> => {
  const lessonPath = path.join(
    process.cwd(),
    'courses',
    courseId,
    moduleId,
    lessonId
  );
  try {
    const lessonJsonContent = await fs.readFile(
      path.join(lessonPath, 'lesson.json'),
      'utf8'
    );
    const lessonJson = JSON.parse(lessonJsonContent);
    const contentPath = path.join(lessonPath, 'content.md');
    const content = await fs.readFile(contentPath, 'utf8');
    return { ...lessonJson, id: lessonId, content };
  } catch {
    return null;
  }
};
