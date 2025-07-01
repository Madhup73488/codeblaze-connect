'use client';

import { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import apiClient from '@/lib/api';

interface UserProgress {
  completedLessons: string[];
  courseProgress: Record<string, {
    completedLessons: number;
    totalLessons: number;
    lastAccessed: string;
  }>;
}

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    courseProgress: {},
  });
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);

  const loadProgress = useCallback(async () => {
    if (!authContext?.user) return;
    try {
      setLoading(true);
      const response = await apiClient.get(`/api/connect/progress/user/${authContext.user.id}`);
      setProgress(response.data);
    } catch (error) {
      console.error("Failed to load progress:", error);
    } finally {
      setLoading(false);
    }
  }, [authContext?.user]);

  useEffect(() => {
    if (authContext?.user) {
      loadProgress();
    }
  }, [authContext?.user, loadProgress]);

  const updateProgress = async (
    courseId: string,
    moduleId: string,
    lessonId: string,
    timeSpent: number,
    completed: boolean = false
  ) => {
    try {
      await apiClient.post("/api/connect/progress/lesson-complete", {
        courseId,
        moduleId,
        lessonId,
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
  
  const isLessonCompleted = (courseId: string, moduleId: string, lessonId: string): boolean => {
    const lessonKey = `${courseId}-${moduleId}-${lessonId}`;
    return progress.completedLessons.includes(lessonKey);
  };
  
  const getCourseProgress = (courseId: string) => {
    return progress.courseProgress[courseId] || {
      completedLessons: 0,
      totalLessons: 0,
      lastAccessed: new Date().toISOString()
    };
  };
  
  return {
    progress,
    loading,
    updateProgress,
    isLessonCompleted,
    getCourseProgress,
    refreshProgress: loadProgress
  };
};
