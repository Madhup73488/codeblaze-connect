"use client";

import { useRef, useEffect, useState } from "react";
import { useProgress } from "@/hooks/useProgress";

interface VideoPlayerProps {
  src: string;
  course: { id: string; title: string };
  module: { id: string; title: string };
  lesson: { id: string; title: string };
  onComplete?: () => void;
}

export const VideoPlayer = ({
  src,
  course,
  module,
  lesson,
  onComplete,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [watchTime, setWatchTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { updateProgress } = useProgress();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setWatchTime(video.currentTime);

      // Update progress every 30 seconds
      if (Math.floor(video.currentTime) % 30 === 0) {
        updateProgress(
          course.id,
          module.id,
          lesson.id,
          Math.floor(video.currentTime / 60)
        );
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      // Mark as completed when 90% watched
      const watchPercentage = watchTime / duration;
      if (watchPercentage >= 0.9) {
        updateProgress(
          course.id,
          module.id,
          lesson.id,
          Math.ceil(duration / 60),
          true
        );
        onComplete?.();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
      // Update progress on unmount
      updateProgress(
        course.id,
        module.id,
        lesson.id,
        Math.floor(video.currentTime / 60)
      );
    };
  }, [course, module, lesson, watchTime, duration, updateProgress, onComplete]);

  const progressPercentage = duration > 0 ? (watchTime / duration) * 100 : 0;

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        src={src}
        controls
        className="video-player"
        onContextMenu={(e) => e.preventDefault()} // Prevent right-click download
      >
        Your browser does not support the video tag.
      </video>

      <div className="video-progress-info">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="time-info">
          {Math.floor(watchTime / 60)}:
          {Math.floor(watchTime % 60)
            .toString()
            .padStart(2, "0")}{" "}
          /{Math.floor(duration / 60)}:
          {Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
