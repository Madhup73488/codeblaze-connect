'use client';

import { useEffect, useRef } from 'react';
import { useProgress } from '@/hooks/useProgress';

interface TextLessonTrackerProps {
  course: { id: string; title: string };
  module: { id: string; title: string };
  lesson: { id: string; title: string };
}

const TextLessonTracker = ({ course, module, lesson }: TextLessonTrackerProps) => {
  const { updateProgress } = useProgress();
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const handleUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000 / 60);
      updateProgress(course.id, module.id, lesson.id, timeSpent);
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
      handleUnload(); // Also update on component unmount
    };
  }, [course, module, lesson, updateProgress]);

  return null;
};

export default TextLessonTracker;
