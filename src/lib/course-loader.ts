import fs from "fs/promises";
import path from "path";

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
  type: "text" | "video" | "interactive";
  content?: string;
  difficulty?: string;
}

export const getAllCourses = async (): Promise<Course[]> => {
  const coursesPath = path.join(process.cwd(), "courses");
  const courseFolders = await fs.readdir(coursesPath, { withFileTypes: true });

  const courses = await Promise.all(
    courseFolders
      .filter((dirent) => dirent.isDirectory())
      .map(async (dirent) => {
        const courseId = dirent.name;
        return getCourseStructure(courseId);
      })
  );

  return courses.filter(Boolean) as Course[];
};

export const getCourseStructure = async (
  courseId: string
): Promise<Course | null> => {
  try {
    const coursePath = path.join(process.cwd(), "courses", decodeURIComponent(courseId));
    const courseJsonContent = await fs.readFile(
      path.join(coursePath, "course.json"),
      "utf8"
    );
    const courseJson = JSON.parse(courseJsonContent);

    const moduleFolders = await fs.readdir(coursePath, { withFileTypes: true });
    const modules = await Promise.all(
      moduleFolders
        .filter((dirent) => dirent.isDirectory())
        .map(async (moduleDirent) => {
          const moduleId = moduleDirent.name;
          const modulePath = path.join(coursePath, moduleId);
          try {
            const moduleJsonContent = await fs.readFile(
              path.join(modulePath, "module.json"),
              "utf8"
            );
            const moduleJson = JSON.parse(moduleJsonContent);

            const lessonFolders = await fs.readdir(modulePath, {
              withFileTypes: true,
            });
            const lessons = await Promise.all(
              lessonFolders
                .filter((dirent) => dirent.isDirectory())
                .map(async (lessonDirent) => {
                  const lessonId = lessonDirent.name;
                  const lessonPath = path.join(modulePath, lessonId);
                  try {
                    const lessonJsonContent = await fs.readFile(
                      path.join(lessonPath, "lesson.json"),
                      "utf8"
                    );
                    const lessonJson = JSON.parse(lessonJsonContent);
                    try {
                      const contentPath = path.join(lessonPath, "content.md");
                      const content = await fs.readFile(contentPath, "utf8");
                      return { ...lessonJson, id: lessonId, content };
                    } catch {
                      return { ...lessonJson, id: lessonId };
                    }
                  } catch {
                    return null;
                  }
                })
            );

            return {
              ...moduleJson,
              id: moduleId,
              lessons: lessons.filter(Boolean) as Lesson[],
            };
          } catch {
            return null;
          }
        })
    );

    return {
      ...courseJson,
      id: courseId,
      modules: modules.filter(Boolean) as Module[],
    };
  } catch (error) {
    console.error(`Error loading course structure for ${courseId}:`, error);
    return null;
  }
};

export const getLesson = async (
  courseId: string,
  moduleId: string,
  lessonId: string
): Promise<Lesson | null> => {
  const lessonPath = path.join(
    process.cwd(),
    "courses",
    decodeURIComponent(courseId),
    decodeURIComponent(moduleId),
    decodeURIComponent(lessonId)
  );
  try {
    const lessonJsonContent = await fs.readFile(
      path.join(lessonPath, "lesson.json"),
      "utf8"
    );
    const lessonJson = JSON.parse(lessonJsonContent);
    const contentPath = path.join(lessonPath, "content.md");
    const content = await fs.readFile(contentPath, "utf8");
    return { ...lessonJson, id: lessonId, content };
  } catch (error) {
    console.error(
      `Error loading lesson ${lessonId} in module ${moduleId} of course ${courseId}:`,
      error
    );
    return null;
  }
};
