import React from 'react';
import Link from 'next/link';

const InternshipPage = () => {
  return (
    <div className="max-w-4xl px-4 py-8 bg-white dark:bg-slate-800 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Full-Stack Development Internship Program</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Welcome to your 12-week journey to becoming a confident Full-Stack MERN developer! This roadmap is designed to be your guide, providing a structured curriculum, daily goals, hands-on tasks, and direct links to the detailed course content you need to master each technology.
      </p>
      <Link href="/internships/full-stack-developer/weeks/1">
        <span className="text-blue-500 hover:underline">
          View the 12-Week Roadmap
        </span>
      </Link>
    </div>
  );
};

export default InternshipPage;
