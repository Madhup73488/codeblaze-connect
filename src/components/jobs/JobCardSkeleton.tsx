import React from "react";

export const JobCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 mr-4"></div>
        <div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="mt-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
      <div className="mt-6 h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  );
};
