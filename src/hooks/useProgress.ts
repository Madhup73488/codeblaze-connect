"use client";

import { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import apiClient from "@/lib/api";

interface ProgressEntry {
  course: { id: string; title: string };
  module: { id: string; title: string };
  lesson: { id: string; title: string };
  completed: boolean;
  timeSpent: number;
}

interface UserProgress {
  completedLessons: string[];
  courseProgress: Record<
    string,
    {
      completedLessons: number;
      lastAccessed: string;
      timeSpent: number;
    }
  >;
}

export const useProgress = (initialProgress?: UserProgress) => {
  const [progress, setProgress] = useState<UserProgress>(
    initialProgress || {
      completedLessons: [],
      courseProgress: {},
    }
  );
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  const loadProgress = useCallback(async () => {
    if (!authContext?.user) return;
    try {
      setLoading(true);
      const response: ProgressEntry[] = await apiClient.get(`/api/connect/user/progress`);
      if (response && Array.isArray(response)) {
        const completedLessons = response
          .filter((entry) => entry.completed)
          .map(
            (entry: ProgressEntry) =>
              `${entry.course.id}-${entry.module.id}-${entry.lesson.id}`
          );

        const courseProgress = response.reduce(
          (
            acc: Record<
              string,
              {
                completedLessons: number;
                timeSpent: number;
                lastAccessed: string;
              }
            >,
            entry: ProgressEntry
          ) => {
            if (!acc[entry.course.id]) {
              acc[entry.course.id] = {
                completedLessons: 0,
                timeSpent: 0,
                lastAccessed: new Date().toISOString(),
              };
            }
            acc[entry.course.id].completedLessons += 1;
            acc[entry.course.id].timeSpent += entry.timeSpent;
            return acc;
          },
          {}
        );

        setProgress({ completedLessons, courseProgress });
      }
    } catch (error) {
      console.error("Failed to load progress:", error);
    } finally {
      setLoading(false);
    }
  }, [authContext?.user]);

  useEffect(() => {
    const loadFromStorage = () => {
      const cachedProgress = localStorage.getItem("progress");
      if (cachedProgress) {
        const parsedProgress: ProgressEntry[] = JSON.parse(cachedProgress);
        if (Array.isArray(parsedProgress)) {
          const completedLessons = parsedProgress
            .filter((entry) => entry.completed)
            .map(
              (entry: ProgressEntry) =>
                `${entry.course.id}-${entry.module.id}-${entry.lesson.id}`
            );

          const courseProgress = parsedProgress.reduce(
            (
              acc: Record<
                string,
                {
                  completedLessons: number;
                  timeSpent: number;
                  lastAccessed: string;
                }
              >,
              entry: ProgressEntry
            ) => {
              if (!acc[entry.course.id]) {
                acc[entry.course.id] = {
                  completedLessons: 0,
                  timeSpent: 0,
                  lastAccessed: new Date().toISOString(),
                };
              }
              acc[entry.course.id].completedLessons += 1;
              acc[entry.course.id].timeSpent += entry.timeSpent;
              return acc;
            },
            {}
          );

          setProgress({ completedLessons, courseProgress });
          setLoading(false);
        }
      } else if (authContext?.user && !initialProgress) {
        loadProgress();
      }
    };

    if (authContext?.user) {
      loadFromStorage();
    }
  }, [authContext?.user, initialProgress, loadProgress]);

  const updateProgress = async (
    courseId: string,
    moduleId: string,
    lessonId: string,
    timeSpent: number,
    completed: boolean = false
  ) => {
    if (!authContext?.user) return;
    try {
      await apiClient.post("/api/connect/user/progress", {
        course: { id: courseId, title: "" },
        module: { id: moduleId, title: "" },
        lesson: { id: lessonId, title: "" },
        timeSpent,
        completed,
      });

      // Update local state
      if (completed) {
        const lessonKey = `${courseId}-${moduleId}-${lessonId}`;
        setProgress((prev) => ({
          ...prev,
          completedLessons: [...prev.completedLessons, lessonKey],
        }));
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    }
  };

  const isLessonCompleted = (
    courseId: string,
    moduleId: string,
    lessonId: string
  ): boolean => {
    const lessonKey = `${courseId}-${moduleId}-${lessonId}`;
    return progress.completedLessons.includes(lessonKey);
  };

  const getCourseProgress = (courseId: string) => {
    return (
      progress.courseProgress[courseId] || {
        completedLessons: 0,
        lastAccessed: new Date().toISOString(),
        timeSpent: 0,
      }
    );
  };

  return {
    progress,
    loading,
    updateProgress,
    isLessonCompleted,
    getCourseProgress,
    refreshProgress: loadProgress,
  };
};
