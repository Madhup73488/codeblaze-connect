'use client';

import { useEffect } from 'react';
import { useProgress } from '@/hooks/useProgress';

interface ProgressTrackerProps {
  courseId: string;
  moduleId: string;
  lessonId: string;
}

export const ProgressTracker = ({ courseId, moduleId, lessonId }: ProgressTrackerProps) => {
  const { updateProgress } = useProgress();

  useEffect(() => {
    const timer = setInterval(() => {
      updateProgress(courseId, moduleId, lessonId, 1);
    }, 60000); // Update progress every minute

    return () => {
      clearInterval(timer);
    };
  }, [courseId, moduleId, lessonId, updateProgress]);

  return null; // This component does not render anything
};
